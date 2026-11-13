import { DurableObject } from "cloudflare:workers";

const DEFAULT_CONFIG: GameConfig = { width: 16, height: 16, mines: 33, flags: 17 };
const MAX_PLAYERS = 20;
const KEY_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const PLAYER_COLORS = ["#f2c66d", "#72c7e7", "#e889a0", "#9bd27a", "#bd9af0", "#f39a5e", "#65d2bb", "#df8add", "#a9bdff", "#d2dc72", "#ff8580", "#80d8e8", "#ffc978", "#90b8f0", "#c2dc85", "#eea7c7", "#70d5a0", "#e8a567", "#9e9cf2", "#c7d0da"];

interface Env { ROOMS: DurableObjectNamespace<GameRoom>; ASSETS: Fetcher }
interface GameConfig { width: number; height: number; mines: number; flags: number }
interface Cell { mine: boolean; near: number; open: boolean; boom: boolean; by: string }
interface Player { id: string; token: string; name: string; score: number; explosions: number; color: string; flags: number[]; online: boolean }
interface Game { config: GameConfig | null; cells: Cell[]; players: Player[]; safe: number; phase: "lobby" | "playing" | "over"; hostId: string; over: boolean; winnerId?: string; event: { kind: string; name: string; id: string } | null }
interface Identity { id: string; name: string }

function neighbours(i: number, config: GameConfig): number[] {
  const x = i % config.width, y = Math.floor(i / config.width), result: number[] = [];
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    if ((!dx && !dy) || x + dx < 0 || x + dx >= config.width || y + dy < 0 || y + dy >= config.height) continue;
    result.push((y + dy) * config.width + x + dx);
  }
  return result;
}
function randomBoard(config: GameConfig): Cell[] {
  const cells: Cell[] = Array.from({ length: config.width * config.height }, () => ({ mine: false, near: 0, open: false, boom: false, by: "" }));
  const order = Array.from({ length: cells.length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) { const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1); [order[i], order[j]] = [order[j], order[i]]; }
  for (const index of order.slice(0, config.mines)) cells[index].mine = true;
  for (let i = 0; i < cells.length; i++) if (!cells[i].mine) cells[i].near = neighbours(i, config).filter(j => cells[j].mine).length;
  return cells;
}
function protectFirstOpen(cells: Cell[], index: number, config: GameConfig): void {
  if (cells.some(cell => cell.open) || !cells[index]?.mine) return;
  const safe = cells.map((cell, i) => !cell.mine && i !== index ? i : -1).filter(i => i >= 0);
  if (!safe.length) return;
  const replacement = safe[crypto.getRandomValues(new Uint32Array(1))[0] % safe.length];
  cells[index].mine = false; cells[replacement].mine = true;
  for (let i = 0; i < cells.length; i++) cells[i].near = cells[i].mine ? 0 : neighbours(i, config).filter(j => cells[j].mine).length;
}
function safeName(value: unknown): string { return String(value ?? "Смотритель").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 20) || "Смотритель"; }
function safeConfig(value: unknown): GameConfig {
  const candidate = value && typeof value === "object" ? value as Partial<GameConfig> : DEFAULT_CONFIG;
  const width = Math.max(8, Math.min(30, Math.round(Number(candidate.width) || DEFAULT_CONFIG.width)));
  const height = Math.max(8, Math.min(30, Math.round(Number(candidate.height) || DEFAULT_CONFIG.height)));
  const total = width * height;
  const mines = Math.max(1, Math.min(total - 1, Math.round(Number(candidate.mines) || DEFAULT_CONFIG.mines)));
  const flags = Math.max(1, Math.min(total, Math.round(Number(candidate.flags) || DEFAULT_CONFIG.flags)));
  return { width, height, mines, flags };
}
function automaticFlagLimit(mines: number, players: number): number {
  const count = Math.max(1, players), spareFactor = Math.min(2, 1 + 0.25 * (count - 1));
  return Math.max(1, Math.ceil(mines * spareFactor / count));
}
function freshGame(): Game { return { config: null, cells: [], players: [], safe: 0, phase: "lobby", hostId: "", over: false, event: null }; }
function stripSecrets(game: Game, me: Player) {
  return {
    type: "state", room: "", me: me.id,
    cells: game.cells.map(c => c.open || game.over ? { open: true, mine: c.mine, near: c.near, boom: c.boom, by: c.by } : { open: false }),
    players: game.players.map(({ id, name, score, explosions, color, flags, online }) => ({ id, name, score: game.over ? score : 0, explosions, color, flags, online })),
    config: game.config, phase: game.phase, hostId: game.hostId, token: me.token, safe: game.safe, over: game.over, winnerId: game.winnerId ?? "", event: game.event,
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const match = url.pathname.match(/^\/api\/room\/([A-Z0-9]{4,6})$/i);
    if (match) {
      if (request.headers.get("Upgrade")?.toLowerCase() !== "websocket") return new Response("WebSocket connection required", { status: 426 });
      const roomCode = match[1].toUpperCase();
      const id = env.ROOMS.idFromName(roomCode);
      return env.ROOMS.get(id).fetch(new Request(request, { headers: request.headers }));
    }
    return env.ASSETS.fetch(request);
  },
};

export class GameRoom extends DurableObject<Env> {
  private game: Game | null = null;
  private init: Promise<void>;
  private actions: Promise<void> = Promise.resolve();
  private roomCode = "";

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.init = ctx.blockConcurrencyWhile(async () => {
      this.game = await ctx.storage.get<Game>("game") ?? null;
      if (this.game) {
        if (!this.game.config && this.game.cells.length) this.game.config = { ...DEFAULT_CONFIG };
        this.game.phase ??= this.game.over ? "over" : "playing";
        this.game.hostId ??= this.game.players[0]?.id ?? "";
        const occupiedFlags = new Set<number>();
        this.game.players.forEach((player, index) => {
          player.token ??= crypto.randomUUID(); player.color ??= PLAYER_COLORS[index % PLAYER_COLORS.length]; player.flags ??= []; player.score ??= 0; player.explosions ??= 0;
          player.flags = player.flags.filter(flag => { if (occupiedFlags.has(flag)) return false; occupiedFlags.add(flag); return true; });
        });
      }
    });
  }

  private serialize<T>(work: () => Promise<T>): Promise<T> {
    const next = this.actions.then(work, work);
    this.actions = next.then(() => undefined, () => undefined);
    return next;
  }

  async fetch(request: Request): Promise<Response> {
    await this.init;
    this.roomCode = new URL(request.url).pathname.match(/^\/api\/room\/([A-Z0-9]{4,6})$/i)?.[1]?.toUpperCase() ?? "";
    return this.serialize(async () => {
      if (this.ctx.getWebSockets().filter(ws => ws.readyState === WebSocket.OPEN).length >= MAX_PLAYERS) return new Response("За столом уже 20 игроков.", { status: 429 });
      await this.ctx.storage.deleteAlarm();
      const pair = new WebSocketPair();
      const client = pair[0], server = pair[1];
      this.ctx.acceptWebSocket(server);
      server.serializeAttachment({ id: "", name: "" } satisfies Identity);
      server.send(JSON.stringify({ type: "ready" }));
      return new Response(null, { status: 101, webSocket: client });
    });
  }

  webSocketMessage(socket: WebSocket, raw: string | ArrayBuffer): Promise<void> {
    return this.serialize(async () => {
      await this.init;
      if (typeof raw !== "string" || raw.length > 2000) return;
      let packet: Record<string, unknown>; try { packet = JSON.parse(raw); } catch { return; }
      const attachment = socket.deserializeAttachment() as Identity | null;
      if (packet.type === "join") { await this.join(socket, packet); return; }
      if (!this.game) return;
      if (!attachment?.id || !this.game.players.some(p => p.id === attachment.id)) return;
      if (packet.type === "start") {
        if (this.game.phase !== "lobby" || this.game.hostId !== attachment.id) return;
        const requested = safeConfig(packet.config);
        const activePlayers = Math.max(1, this.game.players.filter(p => p.online !== false).length);
        const config = { ...requested, flags: automaticFlagLimit(requested.mines, activePlayers) };
        this.game.config = config; this.game.cells = randomBoard(config); this.game.safe = 0;
        this.game.phase = "playing"; this.game.winnerId = ""; this.game.event = { kind: "started", name: String(config.flags), id: attachment.id };
        await this.publish(); return;
      }
      if (packet.type !== "open" && packet.type !== "flag") return;
      const index = Number(packet.index);
      if (!Number.isInteger(index) || index < 0 || index >= this.game.cells.length || this.game.phase !== "playing" || this.game.over) return;
      const player = this.game.players.find(p => p.id === attachment.id)!;
      const cell = this.game.cells[index];
      this.game.event = null;
      if (packet.type === "flag") {
        const already = player.flags.indexOf(index);
        if (already >= 0) player.flags.splice(already, 1);
        else {
          if (cell.open) return;
          if (this.game.players.some(other => other.id !== player.id && other.flags.includes(index))) { socket.send(JSON.stringify({ type: "notice", text: "На этой клетке уже стоит флажок другого игрока." })); return; }
          const flagLimit = this.game.config?.flags ?? DEFAULT_CONFIG.flags;
          if (player.flags.length >= flagLimit) { socket.send(JSON.stringify({ type: "notice", text: `На поле можно поставить не больше ${flagLimit} своих флажков. Сними один, чтобы поставить другой.` })); return; }
          player.flags.push(index);
        }
      } else {
        if (cell.open) return;
        if (!this.game.cells.some(candidate => candidate.open)) protectFirstOpen(this.game.cells, index, this.game.config ?? DEFAULT_CONFIG);
        if (cell.mine) {
          cell.open = true; cell.boom = true; cell.by = player.name; player.explosions++;
          this.game.event = { kind: "boom", name: player.name, id: player.id };
        } else {
          const opened = new Set([index]), queue = [index];
          const config = this.game.config ?? DEFAULT_CONFIG;
          while (queue.length) { const next = queue.shift()!; this.game.cells[next].open = true; this.game.cells[next].by = player.name; this.game.safe++; if (this.game.cells[next].near) continue; for (const neighbour of neighbours(next, config)) if (!this.game.cells[neighbour].open && !this.game.cells[neighbour].mine && !opened.has(neighbour)) { opened.add(neighbour); queue.push(neighbour); } }
          if (this.game.safe >= config.width * config.height - config.mines) this.finishIfDone();
        }
      }
      await this.publish();
    });
  }

  private async join(socket: WebSocket, packet: Record<string, unknown>) {
    if (!this.game && packet.create !== true) {
      socket.send(JSON.stringify({ type: "error", message: "Комната не найдена. Проверь код или создай новую." }));
      socket.close(1008, "room not found");
      return;
    }
    if (!this.game) this.game = freshGame();
    const id = /^[\w-]{8,64}$/.test(String(packet.id ?? "")) ? String(packet.id) : crypto.randomUUID();
    const token = /^[\w-]{16,100}$/.test(String(packet.token ?? "")) ? String(packet.token) : "";
    const name = safeName(packet.name);
    let player = this.game.players.find(p => p.id === id);
    if (!player) {
      if (this.game.phase !== "lobby") { socket.send(JSON.stringify({ type: "error", message: "Партия уже началась. Новые игроки входят только в лобби." })); socket.close(1008, "game already started"); return; }
      if (this.game.players.filter(p => p.online).length >= MAX_PLAYERS) { socket.send(JSON.stringify({ type: "error", message: "В комнате уже 20 игроков." })); socket.close(1008, "room full"); return; }
      const usedColors = new Set(this.game.players.map(p => p.color));
      player = { id, token: token || crypto.randomUUID(), name, score: 0, explosions: 0, color: PLAYER_COLORS.find(color => !usedColors.has(color)) ?? PLAYER_COLORS[this.game.players.length % PLAYER_COLORS.length], flags: [], online: true };
      this.game.players.push(player);
      if (!this.game.hostId || !this.game.players.some(p => p.id === this.game!.hostId && p.online)) this.game.hostId = id;
      this.game.event = { kind: "joined", name, id };
    } else {
      if (!token || token !== player.token) { socket.send(JSON.stringify({ type: "error", message: "Не удалось подтвердить участника комнаты. Создай новую комнату или проверь ссылку." })); socket.close(1008, "invalid player token"); return; }
      player.name = name; player.online = true; player.flags ??= []; player.explosions ??= 0; if (!player.color) player.color = PLAYER_COLORS[this.game.players.indexOf(player) % PLAYER_COLORS.length]; if (!this.game.over) player.score = 0;
    }
    socket.serializeAttachment({ id, name } satisfies Identity);
    await this.publish();
  }

  private finishIfDone() {
    if (!this.game || this.game.over) return;
    this.game.over = true; this.game.phase = "over";
    for (const player of this.game.players) player.score = player.flags.reduce((score, index) => score + (this.game!.cells[index].mine ? 2 : 0), 0) - player.explosions * 3;
    const accuracy = (player: Player) => player.flags.reduce((count, index) => count + (this.game!.cells[index]?.mine ? 1 : 0), 0);
    const ranked = [...this.game.players].sort((a, b) => b.score - a.score || accuracy(b) - accuracy(a) || a.explosions - b.explosions);
    const finalists = ranked.filter(player => player.score === ranked[0].score && accuracy(player) === accuracy(ranked[0]) && player.explosions === ranked[0].explosions);
    this.game.winnerId = finalists[crypto.getRandomValues(new Uint32Array(1))[0] % finalists.length].id;
    this.game.event = { kind: "finished", name: "", id: "" };
  }
  private async publish() {
    if (!this.game) return;
    await this.ctx.storage.put("game", this.game);
    for (const socket of this.ctx.getWebSockets()) {
      const identity = socket.deserializeAttachment() as Identity | null;
      const player = identity?.id ? this.game.players.find(p => p.id === identity.id) : null;
      if (!player) continue;
      try { const state = stripSecrets(this.game, player); state.room = this.roomCode; socket.send(JSON.stringify(state)); } catch { /* socket closed between event and broadcast */ }
    }
  }

  webSocketClose(socket: WebSocket) { return this.serialize(async () => { await this.removePlayer(socket); }); }
  webSocketError(socket: WebSocket) { return this.serialize(async () => { await this.removePlayer(socket); }); }

  private async removePlayer(socket: WebSocket) {
    await this.init;
    const identity = socket.deserializeAttachment() as Identity | null;
    if (!this.game || !identity?.id) return;
    const player = this.game.players.find(p => p.id === identity.id);
    if (player) player.online = false;
    if (this.game.phase === "lobby" && this.game.hostId === identity.id) this.game.hostId = this.game.players.find(p => p.online)?.id ?? identity.id;
    if (this.ctx.getWebSockets().filter(ws => ws.readyState === WebSocket.OPEN).length === 0) await this.ctx.storage.setAlarm(Date.now() + 6 * 60 * 60 * 1000);
    await this.publish();
  }

  async alarm() {
    if (this.ctx.getWebSockets().some(ws => ws.readyState === WebSocket.OPEN)) return;
    this.game = null;
    await this.ctx.storage.deleteAll();
  }
}
