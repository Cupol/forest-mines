import { DurableObject } from "cloudflare:workers";
import { DRAW_WORDS } from "../../public/draw-words.js";
import { validFleet } from "../../public/sea-rules.js";
import { Leaderboard } from "./leaderboard";
import { ArenaRoom } from "./arena";
export { Leaderboard };
export { ArenaRoom };

const DEFAULT_CONFIG: GameConfig = { width: 16, height: 16, mines: 33, flags: 17 };
const MAX_PLAYERS = 20;
const KEY_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const PLAYER_COLORS = ["#f2c66d", "#72c7e7", "#e889a0", "#9bd27a", "#bd9af0", "#f39a5e", "#65d2bb", "#df8add", "#a9bdff", "#d2dc72", "#ff8580", "#80d8e8", "#ffc978", "#90b8f0", "#c2dc85", "#eea7c7", "#70d5a0", "#e8a567", "#9e9cf2", "#c7d0da"];

interface Env { ROOMS: DurableObjectNamespace<GameRoom>; RECORDS: DurableObjectNamespace<Leaderboard>; ARENAS: DurableObjectNamespace<ArenaRoom>; ASSETS: Fetcher }
interface GameConfig { width: number; height: number; mines: number; flags: number; rules?: "classic" | "points" }
import { TYPING_TEXTS } from "../../public/typing-texts.js";

type GameMode = "sapper" | "draw" | "sea" | "typing" | "four" | "pairs" | "cards" | "reaction";
const RECORD_MODES = new Set<string>(["sapper","draw","sea","typing","four","pairs","cards","reaction"]);
async function profileHash(token:string) {
  const bytes=new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(token)));
  return Array.from(bytes,byte=>byte.toString(16).padStart(2,"0")).join("");
}
interface CardGame { order: string[]; hands: Record<string, number[]>; pile: number[]; stood: string[] }
interface TableGame { turn: string; board: string[]; deck: number[]; found: string[]; open: number[]; latest: number; line: number[]; cards?: CardGame; reaction?: ReactionRound }
interface ReactionRound { signalAt: number; ready: boolean; elapsed: number | null; early: string }
const isTableMode = (mode?: GameMode) => mode === "four" || mode === "pairs" || mode === "cards" || mode === "reaction";
const tableLimit = (mode?: GameMode) => mode === "cards" ? 4 : 2;
function handTotal(hand: number[]) {
  let total = 0, aces = 0;
  for (const card of hand) {
    const rank = card % 13;
    if (rank === 0) aces++;
    total += Math.min(10, rank + 1);
  }
  if (aces && total + 10 <= 21) total += 10;
  return total;
}
function shuffle<T>(items: T[]) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

interface TypingEntry { value: string; attempts: number; errors: number; finishedAt: number }
interface TypingRace {
  text: string; startsAt: number; endsAt: number; round: number;
  entries: Record<string, TypingEntry>;
  used: string[];
  previous: { ranked: TypingResult[]; eliminated: string[] } | null;
}
interface TypingResult { id: string; correct: number; accuracy: number; speed: number; finished: boolean }

function typingResults(race: TypingRace, now: number): TypingResult[] {
  return Object.entries(race.entries).map(([id, entry]) => {
    const correct = [...entry.value].filter((char, i) => char === race.text[i]).length;
    const accuracy = entry.attempts ? (entry.attempts - entry.errors) / entry.attempts : 0;
    const seconds = Math.max(1, (Math.min(entry.finishedAt || now, race.endsAt) - race.startsAt) / 1000);
    return { id, correct, accuracy, speed: correct * 60 / seconds, finished: Boolean(entry.finishedAt) };
  }).sort((a, b) => Number(b.finished) - Number(a.finished) ||
    b.speed * b.accuracy - a.speed * a.accuracy || b.correct - a.correct || b.accuracy - a.accuracy);
}

function nextTypingRound(ids: string[], prior?: TypingRace): TypingRace {
  const used = prior?.used ?? [];
  const available = TYPING_TEXTS.filter(text => !used.includes(text));
  const text = available[crypto.getRandomValues(new Uint32Array(1))[0] % available.length];
  const startsAt = Date.now() + (prior ? 7000 : 3000);
  return {
    text, startsAt, endsAt: startsAt + 120000, round: (prior?.round ?? 0) + 1,
    entries: Object.fromEntries(ids.map(id => [id, { value: "", attempts: 0, errors: 0, finishedAt: 0 }])),
    used: [...used, text], previous: prior?.previous ?? null
  };
}
interface SeaGame {
  fleets: Record<string, number[][]>;
  shots: Record<string, number[]>;
  turn: string;
}
interface Cell { mine: boolean; near: number; open: boolean; boom: boolean; by: string }
interface Player { id: string; token: string; name: string; score: number; explosions: number; color: string; flags: number[]; online: boolean; eliminated?: "mine" | "idle"; moveBy?: number; classicOpened?: boolean; recordProfile?: string }
const STROKE_TOOLS = ["pen", "line", "eraser", "fill", "square", "circle", "rect", "ellipse"] as const;
interface Stroke { color: string; size: number; tool?: (typeof STROKE_TOOLS)[number]; opacity?: number; points: { x: number; y: number }[] }
interface ChatLine { id: string; kind: "chat" | "system"; name: string; text: string; at: number }
interface Drawing { round: number; roundsTotal: number; drawerId: string; word: string; stage: "choosing" | "drawing"; choices: string[]; offeredWords?: string[]; revealedIndices: number[]; turnOrder: string[]; startedAt: number; endsAt: number; strokes: Stroke[]; guessedPlayers: string[] }
interface Game { mode?: GameMode; config: GameConfig | null; cells: Cell[]; players: Player[]; safe: number; boardVersion?: number; phase: "lobby" | "playing" | "over"; hostId: string; over: boolean; winnerId?: string; drawing?: Drawing; sea?: SeaGame; table?: TableGame; typing?: TypingRace; chat?: ChatLine[]; event: { kind: string; name: string; id: string } | null; recordMatch?: string; recordSaved?: boolean }
interface Identity { id: string; name: string }

function normalizeWord(value: unknown): string { return String(value ?? "").toLocaleLowerCase("ru-RU").replace(/ё/g, "е").replace(/[^а-яa-z0-9]+/g, ""); }
function letterIndices(word: string): number[] { return [...word].map((char, index) => char === " " ? -1 : index).filter(index => index >= 0); }
function maxHints(word: string): number { const count = letterIndices(word).length; return Math.max(0, Math.min(count - 1, Math.floor(count / 2))); }
function makeHint(word: string, revealed: number[]): string {
  const shown = new Set(revealed);
  return [...word].map((char, index) => char === " " ? "   " : shown.has(index) ? char + " " : "_ ").join("");
}
function chooseWordPair(drawing: Drawing): string[] {
  const offered = drawing.offeredWords ??= [drawing.word, ...drawing.choices].filter(Boolean);
  const available = DRAW_WORDS.filter(word => !offered.includes(word));
  const first = crypto.getRandomValues(new Uint32Array(1))[0] % available.length;
  const offset = 1 + crypto.getRandomValues(new Uint32Array(1))[0] % (available.length - 1);
  const choices = [available[first], available[(first + offset) % available.length]];
  offered.push(...choices);
  return choices;
}

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
const CLASSIC_IDLE_MS = 60_000;

function safeConfig(value: unknown): GameConfig {
  const candidate = value && typeof value === "object" ? value as Partial<GameConfig> : DEFAULT_CONFIG;
  const width = Math.max(8, Math.min(30, Math.round(Number(candidate.width) || DEFAULT_CONFIG.width)));
  const height = Math.max(8, Math.min(30, Math.round(Number(candidate.height) || DEFAULT_CONFIG.height)));
  const total = width * height;
  const mines = Math.max(1, Math.min(total - 1, Math.round(Number(candidate.mines) || DEFAULT_CONFIG.mines)));
  const flags = Math.max(1, Math.min(total, Math.round(Number(candidate.flags) || DEFAULT_CONFIG.flags)));
  const rules = candidate.rules === "points" ? "points" : "classic";
  return { width, height, mines, flags: rules === "classic" ? mines : flags, rules };
}
function freshGame(mode: GameMode = "sapper"): Game { return { mode, config: null, cells: [], players: [], safe: 0, phase: "lobby", hostId: "", over: false, event: null, chat: [] }; }
function stripSecrets(game: Game, me: Player) {
  const typing = game.typing;
  const publicTyping = typing ? {
    text: typing.text, startsAt: typing.startsAt, endsAt: typing.endsAt, round: typing.round,
    value: typing.entries[me.id]?.value ?? "",
    results: typingResults(typing, Date.now()), previous: typing.previous
  } : null;
  const sea = game.sea;
  const opponent = game.players.find(player => player.id !== me.id);
  const enemyFleet = sea?.fleets[opponent?.id ?? ""] ?? [];
  const fired = sea?.shots[me.id] ?? [];
  const publicSea = sea ? {
    turn: sea.turn,
    ownFleet: sea.fleets[me.id] ?? [],
    opponentReady: enemyFleet.length > 0,
    incoming: sea.shots[opponent?.id ?? ""] ?? [],
    fired: fired.map(cell => ({ cell, hit: enemyFleet.some(ship => ship.includes(cell)) })),
    sunk: enemyFleet.filter(ship => ship.every(cell => fired.includes(cell))),
  } : null;
  const drawing = game.drawing;
  const publicDrawing = drawing ? {
    round: drawing.round, roundsTotal: drawing.roundsTotal, drawerId: drawing.drawerId,
    word: drawing.drawerId === me.id || game.phase === "over" ? drawing.word : "",
    stage: drawing.stage, choices: drawing.stage === "choosing" && drawing.drawerId === me.id ? drawing.choices : [],
    hint: makeHint(drawing.word, drawing.revealedIndices), hintCount: drawing.revealedIndices.length, maxHints: maxHints(drawing.word),
    startedAt: drawing.startedAt, endsAt: drawing.endsAt, strokes: drawing.strokes, guessedPlayers: drawing.guessedPlayers,
  } : null;
  return {
    type: "state", room: "", me: me.id, mode: game.mode ?? "sapper", sea: publicSea, typing: publicTyping, table: game.table ? {
      turn: game.table.turn, reaction: game.table.reaction ? { ready: game.table.reaction.ready, elapsed: game.table.reaction.elapsed, early: game.table.reaction.early } : null, hand: game.table.cards?.hands[me.id] ?? [],
      totals: game.table.cards ? Object.fromEntries(Object.entries(game.table.cards.hands).filter(([id]) => game.over || id === me.id).map(([id, hand]) => [id, handTotal(hand)])) : {},
      stood: game.table.cards?.stood ?? [],
      counts: game.table.cards ? Object.fromEntries(Object.entries(game.table.cards.hands).map(([id, hand]) => [id, hand.length])) : {}, board: game.table.board, found: game.table.found, latest: game.table.latest, line: game.table.line,
      cards: game.table.deck.map((value, index) => game.table!.open.includes(index) || game.table!.found[index] ? value : null)
    } : null,
    cells: game.cells.map(c => c.open || game.over ? { open: true, mine: c.mine, near: c.near, boom: c.boom, by: c.by } : { open: false }),
    players: game.players.map(({ id, name, score, explosions, color, flags, online, eliminated, moveBy }) => ({ id, name, score: game.mode === "draw" || game.over ? score : 0, explosions, color, flags: game.config?.rules === "classic" && id !== me.id ? [] : flags, online, eliminated, moveBy: id === me.id ? moveBy : undefined })),
    drawing: publicDrawing, chat: game.chat ?? [], config: game.config, phase: game.phase, hostId: game.hostId, token: me.token, safe: game.safe, boardVersion: game.boardVersion, over: game.over, winnerId: game.winnerId ?? "", event: game.event,
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const arena = url.pathname.match(/^\/api\/arena\/([A-Z0-9]{6})$/i);
    if(arena){
      if(request.headers.get("Upgrade")?.toLowerCase()!=="websocket")return new Response("WebSocket connection required",{status:426});
      return env.ARENAS.get(env.ARENAS.idFromName(arena[1].toUpperCase())).fetch(request);
    }
    if(url.pathname==="/api/records"){
      const mode=url.searchParams.get("game")??"";
      if(request.method!=="GET")return new Response(null,{status:405,headers:{Allow:"GET"}});
      if(!RECORD_MODES.has(mode))return new Response(null,{status:400});
      const records=env.RECORDS.get(env.RECORDS.idFromName(mode));
      return Response.json(await records.top(mode),{headers:{"Access-Control-Allow-Origin":"*","Cache-Control":"no-store"}});
    }
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
      this.roomCode = await ctx.storage.get<string>("roomCode") ?? "";
      if (this.game) {
        this.game.mode ??= "sapper";
        this.game.chat ??= [];
        if (!this.game.config && this.game.cells.length) this.game.config = { ...DEFAULT_CONFIG };
        this.game.phase ??= this.game.over ? "over" : "playing";
        this.game.hostId ??= this.game.players[0]?.id ?? "";
        if (this.game.drawing) {
          this.game.drawing.stage ??= "drawing";
          this.game.drawing.choices ??= [];
          this.game.drawing.revealedIndices ??= [];
        }
        const occupiedFlags = new Set<number>();
        this.game.players.forEach((player, index) => {
          player.token ??= crypto.randomUUID(); player.color ??= PLAYER_COLORS[index % PLAYER_COLORS.length]; player.flags ??= []; player.score ??= 0; player.explosions ??= 0;
          if (this.game?.config?.rules !== "classic") {
            player.flags = player.flags.filter(flag => { if (occupiedFlags.has(flag)) return false; occupiedFlags.add(flag); return true; });
          }
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
      await this.ctx.storage.put("roomCode", this.roomCode);
      if (this.game?.mode === "draw" && this.game.phase === "playing" && this.game.drawing) await this.ctx.storage.setAlarm(Math.max(Date.now() + 1, this.game.drawing.endsAt));
      else if (this.game?.mode === "typing" && this.game.phase === "playing" && this.game.typing) await this.ctx.storage.setAlarm(this.game.typing.endsAt);
      else if (this.game?.phase === "playing" && this.game.table?.reaction && !this.game.table.reaction.ready) await this.ctx.storage.setAlarm(Math.max(Date.now() + 1, this.game.table.reaction.signalAt));
      else if (this.game?.phase === "playing" && this.game.config?.rules === "classic") await this.scheduleClassicAlarm();
      else await this.ctx.storage.deleteAlarm();
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
      if (typeof raw !== "string" || raw.length > 12000) return;
      let packet: Record<string, unknown>; try { packet = JSON.parse(raw); } catch { return; }
      const attachment = socket.deserializeAttachment() as Identity | null;
      if (packet.type === "join") { await this.join(socket, packet); return; }
      if (!this.game) return;
      if (!attachment?.id || !this.game.players.some(p => p.id === attachment.id)) return;
      if (packet.type === "rematch") {
        if (this.game.phase !== "over") return;
        const online = this.game.players.filter(player => player.online);
        const host = online.find(player => player.id === this.game!.hostId) ?? online[0];
        if (host?.id !== attachment.id) return;
        const lobby = freshGame(this.game.mode);
        lobby.hostId = host.id;
        await this.recordResult();
        lobby.players = online.map(({ id, token, name, color, recordProfile }) => ({
          id, token, name, color, recordProfile, online: true, score: 0, explosions: 0, flags: [],
        }));
        await this.ctx.storage.deleteAlarm();
        this.game = lobby;
        await this.publish();
        return;
      }
      if (isTableMode(this.game.mode)) { await this.handleTablePacket(attachment.id, packet); return; }
      if (this.game.mode === "sea") { await this.handleSeaPacket(attachment.id, packet); return; }
      if (this.game.mode === "typing") { await this.handleTypingPacket(attachment.id, packet); return; }
      if (packet.type === "start") {
        if (this.game.phase !== "lobby" || this.game.hostId !== attachment.id) return;
        if ((this.game.mode ?? "sapper") === "draw") { await this.startDrawing(socket, attachment.id); return; }
        const config = safeConfig(packet.config);
        if (config.rules === "classic") {
          const active = this.game.players.filter(player => player.online);
          if (active.length < 2) {
            socket.send(JSON.stringify({ type: "notice", text: "Для классической партии нужны хотя бы два игрока." }));
            return;
          }
          this.game.players = active;
          const deadline = Date.now() + CLASSIC_IDLE_MS;
          for (const player of active) player.moveBy = deadline;
          await this.ctx.storage.setAlarm(deadline);
        }
        this.game.config = config; this.game.cells = randomBoard(config); this.game.safe = 0;
        if (config.rules === "classic") this.game.boardVersion = 0;
        this.game.phase = "playing"; this.game.winnerId = ""; this.game.event = { kind: "started", name: String(config.flags), id: attachment.id };
        await this.publish(); return;
      }
      if ((this.game.mode ?? "sapper") === "draw") { await this.handleDrawPacket(socket, attachment.id, packet); return; }
      if (packet.type !== "open" && packet.type !== "flag") return;
      const index = Number(packet.index);
      if (!Number.isInteger(index) || index < 0 || index >= this.game.cells.length || this.game.phase !== "playing" || this.game.over) return;
      const player = this.game.players.find(p => p.id === attachment.id)!;
      if (this.game.config?.rules === "classic") {
        if (packet.boardVersion !== (this.game.boardVersion ?? 0)) return;
        await this.handleClassicMove(socket, player, packet.type, index);
        return;
      }
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

  private async scheduleClassicAlarm() {
    const deadlines = this.game!.players.filter(player => !player.eliminated).map(player => player.moveBy ?? Infinity);
    const next = Math.min(...deadlines);
    if (Number.isFinite(next)) await this.ctx.storage.setAlarm(Math.max(Date.now() + 1, next));
  }

  private async settleClassic() {
    const game = this.game!;
    const active = game.players.filter(player => !player.eliminated);
    if (active.length > 1 || (active.length === 1 && !active[0].classicOpened)) {
      await this.scheduleClassicAlarm(); return;
    }
    game.phase = "over"; game.over = true;
    game.winnerId = active[0]?.id ?? "";
    game.event = null;
    await this.ctx.storage.deleteAlarm();
  }

  private async expireClassicPlayers() {
    const now = Date.now();
    let expired = false;
    for (const player of this.game!.players) {
      if (!player.eliminated && player.moveBy !== undefined && player.moveBy <= now) {
        player.eliminated = "idle";
        expired = true;
      }
    }
    if (expired) { this.game!.event = null; await this.settleClassic(); }
    return expired;
  }

  private async handleClassicMove(socket: WebSocket, player: Player, action: string, index: number) {
    const game = this.game!, config = game.config!;
    const expired = await this.expireClassicPlayers();
    if (expired) await this.publish();
    if (game.over || player.eliminated) return;
    const cell = game.cells[index];
    if (cell.open) return;
    game.event = null;
    if (action === "flag") {
      const old = player.flags.indexOf(index);
      if (old >= 0) player.flags.splice(old, 1);
      else if (player.flags.length < config.mines) player.flags.push(index);
      else {
        socket.send(JSON.stringify({ type: "notice", text: "Лимит флажков достигнут. Сними один и поставь его в другое место." }));
        return;
      }
      await this.publish();
      return;
    }
    if (player.flags.includes(index)) return;
    if (!game.cells.some(candidate => candidate.open)) protectFirstOpen(game.cells, index, config);
    if (cell.mine) {
      cell.open = true; cell.boom = true; cell.by = player.name;
      player.explosions++; player.eliminated = "mine";
      for (const member of game.players) member.flags = member.flags.filter(flag => flag !== index);
      game.event = { kind: "classicMine", name: player.name, id: player.id };
    } else {
      const queue = [index], opened = new Set(queue), flags = new Set(player.flags);
      for (const position of queue) {
        const current = game.cells[position];
        current.open = true; current.by = player.name; game.safe++;
        if (current.near) continue;
        for (const next of neighbours(position, config)) {
          if (!opened.has(next) && !game.cells[next].mine && !game.cells[next].open && !flags.has(next)) {
            opened.add(next); queue.push(next);
          }
        }
      }
      player.moveBy = Date.now() + CLASSIC_IDLE_MS;
      player.classicOpened = true;
      for (const member of game.players) member.flags = member.flags.filter(flag => !opened.has(flag));
      if (game.safe === game.cells.length - config.mines) {
        game.cells = randomBoard(config); game.safe = 0;
        game.boardVersion = (game.boardVersion ?? 0) + 1;
        for (const member of game.players) member.flags = [];
        game.event = { kind: "classicBoard", name: "", id: "" };
      }
    }
    await this.settleClassic();
    await this.publish();
  }

  private addDrawChat(kind: "chat" | "system", name: string, text: string) {
    if (!this.game) return;
    this.game.chat ??= [];
    this.game.chat.push({ id: crypto.randomUUID(), kind, name, text: text.slice(0, 160), at: Date.now() });
    if (this.game.chat.length > 50) this.game.chat.splice(0, this.game.chat.length - 50);
  }

  private async startDrawing(socket: WebSocket, hostId: string) {
    if (!this.game) return;
    const turnOrder = this.game.players.filter(player => player.online).map(player => player.id);
    if (turnOrder.length < 2) { socket.send(JSON.stringify({ type: "notice", text: "Для рисовальной игры нужны хотя бы два игрока." })); return; }
    for (const player of this.game.players) player.score = 0;
    this.game.drawing = { round: 0, roundsTotal: turnOrder.length, drawerId: "", word: "", stage: "choosing", choices: [], revealedIndices: [], turnOrder, startedAt: 0, endsAt: 0, strokes: [], guessedPlayers: [] };
    this.game.phase = "playing"; this.game.over = false; this.game.event = null; this.game.chat = [];
    const host = this.game.players.find(player => player.id === hostId);
    this.addDrawChat("system", "Комната", `${host?.name ?? "Ведущий"} запустил рисовальную игру.`);
    await this.beginDrawRound(1);
  }

  private async beginDrawRound(round: number) {
    if (!this.game?.drawing) return;
    const drawing = this.game.drawing;
    let nextRound = round;
    while (nextRound <= drawing.roundsTotal && !this.game.players.some(player => player.id === drawing.turnOrder[nextRound - 1] && player.online)) nextRound++;
    if (nextRound > drawing.roundsTotal) {
      this.game.phase = "over"; this.game.over = true; drawing.endsAt = 0; drawing.choices = [];
      const ranked=this.game.players.filter(player=>drawing.turnOrder.includes(player.id)).sort((a,b)=>b.score-a.score);
      this.game.winnerId=ranked[0]?.score>0&&ranked[0].score!==ranked[1]?.score?ranked[0].id:"";
      this.addDrawChat("system", "Комната", "Все раунды завершены. Итоги — в списке игроков.");
      this.game.event = { kind: "drawFinished", name: "", id: "" };
      await this.ctx.storage.deleteAlarm(); await this.publish(); return;
    }
    const drawerId = drawing.turnOrder[nextRound - 1];
    const drawer = this.game.players.find(player => player.id === drawerId)!;
    drawing.round = nextRound; drawing.drawerId = drawerId; drawing.word = "";
    drawing.stage = "choosing"; drawing.choices = chooseWordPair(drawing); drawing.revealedIndices = [];
    drawing.startedAt = 0; drawing.endsAt = Date.now() + 15_000; drawing.strokes = []; drawing.guessedPlayers = [];
    this.game.event = { kind: "drawRound", name: drawer.name, id: drawerId };
    this.addDrawChat("system", "Комната", `Раунд ${drawing.round}/${drawing.roundsTotal}: ${drawer.name} выбирает слово.`);
    await this.ctx.storage.setAlarm(drawing.endsAt); await this.publish();
  }

  private async selectDrawWord(index: number) {
    if (!this.game?.drawing || this.game.phase !== "playing" || this.game.drawing.stage !== "choosing") return;
    const drawing = this.game.drawing, word = drawing.choices[index];
    if (!word) return;
    drawing.word = word; drawing.choices = []; drawing.stage = "drawing";
    drawing.startedAt = Date.now(); drawing.endsAt = drawing.startedAt + 60_000;
    const drawer = this.game.players.find(player => player.id === drawing.drawerId);
    this.addDrawChat("system", "Комната", `${drawer?.name ?? "Игрок"} рисует. У вас 60 секунд!`);
    await this.ctx.storage.setAlarm(drawing.endsAt); await this.publish();
  }

  private async advanceDrawDeadline(): Promise<boolean> {
    if (!this.game?.drawing || this.game.phase !== "playing" || this.game.drawing.endsAt > Date.now()) return false;
    if (this.game.drawing.stage === "choosing") await this.selectDrawWord(crypto.getRandomValues(new Uint32Array(1))[0] % this.game.drawing.choices.length);
    else await this.endDrawRound();
    return true;
  }

  private async endDrawRound() {
    if (!this.game?.drawing || this.game.phase !== "playing") return;
    const drawing = this.game.drawing;
    if (drawing.word) this.addDrawChat("system", "Слово", drawing.word);
    await this.beginDrawRound(drawing.round + 1);
  }

  private async handleDrawPacket(socket: WebSocket, playerId: string, packet: Record<string, unknown>) {
    if (!this.game || this.game.phase !== "playing" || this.game.over || !this.game.drawing) return;
    if (await this.advanceDrawDeadline()) return;
    const drawing = this.game.drawing, player = this.game.players.find(item => item.id === playerId);
    if (!player) return;
    if (packet.round !== undefined && packet.round !== drawing.round) return;
    this.game.event = null;
    if (packet.type === "chooseWord") {
      if (drawing.drawerId !== playerId || drawing.stage !== "choosing" || !Number.isInteger(packet.index)) return;
      await this.selectDrawWord(Number(packet.index)); return;
    }
    if (drawing.stage !== "drawing") return;
    if (packet.type === "hint") {
      if (drawing.drawerId !== playerId || drawing.revealedIndices.length >= maxHints(drawing.word)) return;
      const hidden = letterIndices(drawing.word).filter(index => !drawing.revealedIndices.includes(index));
      if (hidden.length <= 1) return;
      drawing.revealedIndices.push(hidden[crypto.getRandomValues(new Uint32Array(1))[0] % hidden.length]);
      this.addDrawChat("system", "Комната", "Художник открыл букву в подсказке.");
      await this.publish(); return;
    }
    if (packet.type === "stroke" || packet.type === "clear") {
      if (drawing.drawerId !== playerId) return;
      if (packet.type === "clear") drawing.strokes = [];
      else {
        const input = packet.stroke as Partial<Stroke> | null;
        if (!input || !Array.isArray(input.points) || input.points.length < 2 || input.points.length > 100 || drawing.strokes.length >= 800) return;
        const color = typeof input.color === "string" && /^#[0-9a-f]{6}$/i.test(input.color) ? input.color : "#17201c";
        const size = Math.min(0.08, Math.max(0.003, Number(input.size) || 0.012));
        const tool = input.tool && STROKE_TOOLS.includes(input.tool) ? input.tool : "pen";
        const opacityValue = input.opacity == null ? 1 : Number(input.opacity);
        const opacity = Number.isFinite(opacityValue) ? Math.min(1, Math.max(0.1, opacityValue)) : 1;
        let points = input.points.filter(point => point && typeof point === "object").map(point => ({ x: Math.min(1, Math.max(0, Number(point.x) || 0)), y: Math.min(1, Math.max(0, Number(point.y) || 0)) }));
        if (points.length < 2) return;
        if (tool !== "pen" && tool !== "eraser") points = [points[0], points[points.length - 1]];
        drawing.strokes.push({ color, size, tool, opacity, points });
      }
      await this.publish(); return;
    }
    if (packet.type === "guess" || packet.type === "chat") {
      const text = String(packet.text ?? "").replace(/[<>\u0000-\u001f]/g, " ").trim().slice(0, 60);
      if (!text) return;
      if ((playerId === drawing.drawerId || drawing.guessedPlayers.includes(playerId)) && normalizeWord(text) === normalizeWord(drawing.word)) return;
      if (packet.type === "guess" && playerId !== drawing.drawerId && !drawing.guessedPlayers.includes(playerId) && normalizeWord(text) === normalizeWord(drawing.word)) {
        const position = drawing.guessedPlayers.length;
        const points = Math.max(25, 100 - position * 15 - Math.floor((Date.now() - drawing.startedAt) / 1500));
        player.score += points;
        const drawer = this.game.players.find(item => item.id === drawing.drawerId);
        if (drawer) drawer.score += Math.ceil(points / 2);
        drawing.guessedPlayers.push(playerId);
        this.addDrawChat("system", "Угадал", `${player.name} угадал слово! +${points}`);
        const guessers = this.game.players.filter(item => item.online && item.id !== drawing.drawerId);
        if (guessers.length && guessers.every(item => drawing.guessedPlayers.includes(item.id))) { await this.endDrawRound(); return; }
      } else {
        this.addDrawChat("chat", player.name, text);
      }
      await this.publish(); return;
    }
  }

  private async finishTyping() {
    const game = this.game;
    const race = game?.typing;
    if (!game || !race || game.over) return;
    const ranked = typingResults(race, race.endsAt);
    if (ranked.length > 2) {
      const survivors = ranked.length - Math.min(ranked.length - 2, Math.ceil(ranked.length / 4));
      race.previous = { ranked, eliminated: ranked.slice(survivors).map(result => result.id) };
      game.typing = nextTypingRound(ranked.slice(0, survivors).map(result => result.id), race);
      await this.ctx.storage.setAlarm(game.typing.endsAt);
      await this.publish();
      return;
    }
    game.winnerId = ranked[0]?.correct ? ranked[0].id : "";
    game.phase = "over"; game.over = true;
    await this.ctx.storage.deleteAlarm();
    await this.publish();
  }

  private async handleTypingPacket(playerId: string, packet: Record<string, unknown>) {
    const game = this.game;
    if (!game) return;
    if (packet.type === "typingStart" && game.phase === "lobby" && game.hostId === playerId) {
      const players = game.players.filter(player => player.online);
      if (players.length < 2) return;
      game.typing = nextTypingRound(players.map(player => player.id));
      game.phase = "playing";
      await this.ctx.storage.setAlarm(game.typing.endsAt);
      await this.publish();
      return;
    }
    const race = game.typing;
    if (!race || game.phase !== "playing") return;
    const now = Date.now();
    if (now >= race.endsAt) { await this.finishTyping(); return; }
    if (now < race.startsAt || packet.round !== race.round || packet.type !== "typingInput" ||
        !Array.isArray(packet.edits) || packet.edits.length > 24) return;
    const entry = race.entries[playerId];
    if (!entry || entry.finishedAt) return;
    for (const value of packet.edits) {
      if (typeof value !== "string" || value.length > race.text.length || value === entry.value) continue;
      let prefix = 0, suffix = 0;
      while (prefix < Math.min(value.length, entry.value.length) && value[prefix] === entry.value[prefix]) prefix++;
      while (suffix < Math.min(value.length, entry.value.length) - prefix &&
             value[value.length - suffix - 1] === entry.value[entry.value.length - suffix - 1]) suffix++;
      if (value.length - suffix - prefix > 1) continue;
      for (let index = prefix; index < value.length - suffix; index++) {
        entry.attempts++;
        if (value[index] !== race.text[index]) entry.errors++;
      }
      entry.value = value;
      if (value === race.text) { entry.finishedAt = now; break; }
    }
    if (Object.values(race.entries).every(result => result.finishedAt)) await this.finishTyping();
    else await this.publish();
  }

  private async handleTablePacket(id: string, packet: Record<string, unknown>) {
    const game = this.game!;
    const online = game.players.filter(player => player.online);
    if (packet.type === "tableStart" && game.phase === "lobby" && id === game.hostId && online.length >= 2 && online.length <= tableLimit(game.mode)) {
      game.players = online;
      const pairs = game.mode === "pairs";
      const deck = pairs ? Array.from({ length: 16 }, (_, i) => i % 8) : [];
      for (let i = deck.length - 1; i > 0; i--) {
        const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      game.table = { turn: online[0].id, board: game.mode === "four" ? Array(42).fill("") : [], deck,
        found: Array(deck.length).fill(""), open: [], latest: -1, line: [] };
      if (game.mode === "reaction") {
        const signalAt = Date.now() + 1800 + crypto.getRandomValues(new Uint32Array(1))[0] % 2800;
        game.table.reaction = { signalAt, ready: false, elapsed: null, early: "" };
        await this.ctx.storage.setAlarm(signalAt);
      }
      if (game.mode === "cards") {
        const pile = shuffle(Array.from({ length: 52 }, (_, i) => i));
        const order = online.map(player => player.id);
        const hands = Object.fromEntries(order.map(playerId => [playerId, pile.splice(0, 2)]));
        game.table.cards = { pile, order, hands, stood: [] };
      }
      game.phase = "playing";
      await this.publish();
      return;
    }
    const table = game.table;
    if (game.mode === "reaction") {
      const reaction = table?.reaction;
      if (packet.type !== "reactionPress" || game.phase !== "playing" || !reaction || online.length !== 2) return;
      const now = Date.now();
      if (reaction.ready) {
        reaction.elapsed = now - reaction.signalAt;
        game.winnerId = id;
      } else {
        reaction.early = id;
        game.winnerId = online.find(player => player.id !== id)!.id;
      }
      game.over = true;
      game.phase = "over";
      await this.ctx.storage.deleteAlarm();
      await this.publish();
      return;
    }
    if (game.mode === "cards" && game.phase === "playing" && table?.turn === id && table.cards) {
      const cards = table.cards;
      if (online.length !== cards.order.length) return;
      const hand = cards.hands[id];
      if (packet.type === "tableDraw" && cards.pile.length) hand.push(cards.pile.pop()!);
      else if (packet.type !== "tableStand") return;
      if (packet.type === "tableStand" || handTotal(hand) >= 21 || !cards.pile.length) {
        cards.stood.push(id);
        const remaining = cards.order.filter(playerId => !cards.stood.includes(playerId));
        if (remaining.length) table.turn = remaining[0];
        else {
          const ranked = cards.order.map(playerId => ({ id: playerId, total: handTotal(cards.hands[playerId]) }))
            .filter(player => player.total <= 21).sort((a, b) => b.total - a.total);
          game.winnerId = ranked[0] && ranked[0].total !== ranked[1]?.total ? ranked[0].id : "";
          game.phase = "over"; game.over = true;
        }
      }
      await this.publish();
      return;
    }
    if (packet.type !== "tableMove" || game.phase !== "playing" || !table || table.turn !== id || online.length !== 2) return;
    const other = online.find(player => player.id !== id)!;
    const index = packet.index;
    if (typeof index !== "number" || !Number.isInteger(index) || index < 0) return;
    let finished = false;
    if (game.mode === "four") {
      if (index >= 7 || table.board[index]) return;
      let row = 5;
      while (table.board[row * 7 + index]) row--;
      table.latest = row * 7 + index;
      table.board[table.latest] = id;
      for (const [dx, dy] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
        const line = [table.latest];
        for (const direction of [-1, 1]) {
          for (let step = 1; step < 4; step++) {
            const x = index + dx * step * direction, y = row + dy * step * direction;
            if (x < 0 || x > 6 || y < 0 || y > 5 || table.board[y * 7 + x] !== id) break;
            line.push(y * 7 + x);
          }
        }
        if (line.length >= 4) { table.line = line; game.winnerId = id; break; }
      }
      finished = Boolean(game.winnerId) || table.board.every(Boolean);
      table.turn = other.id;
    } else {
      if (index >= table.deck.length || table.found[index]) return;
      if (table.open.length === 2) table.open = [];
      if (table.open.includes(index)) return;
      table.open.push(index);
      table.latest = index;
      if (table.open.length === 2) {
        const [a, b] = table.open;
        if (table.deck[a] === table.deck[b]) {
          table.found[a] = table.found[b] = id;
          table.open = [];
          finished = table.found.every(Boolean);
          if (finished) {
            const count = table.found.filter(owner => owner === id).length;
            game.winnerId = count === 8 ? "" : count > 8 ? id : other.id;
          }
        } else table.turn = other.id;
      }
    }
    if (finished) { game.phase = "over"; game.over = true; }
    await this.publish();
  }

  private async handleSeaPacket(playerId: string, packet: Record<string, unknown>) {
    const game = this.game;
    if (!game || game.over) return;
    const opponent = game.players.find(player => player.id !== playerId);
    if (!opponent?.online) return;
    if (packet.type === "seaReady" && game.phase === "lobby" && validFleet(packet.fleet)) {
      const sea = game.sea ??= { fleets: Object.create(null), shots: Object.create(null), turn: "" };
      if (sea.fleets[playerId]) return;
      sea.fleets[playerId] = packet.fleet as number[][];
      if (sea.fleets[opponent.id]) {
        game.phase = "playing";
        sea.turn = crypto.getRandomValues(new Uint8Array(1))[0] % 2 ? playerId : opponent.id;
      }
      await this.publish();
      return;
    }
    const sea = game.sea;
    if (packet.type !== "seaFire" || game.phase !== "playing" || sea?.turn !== playerId) return;
    const cell = packet.cell;
    if (typeof cell !== "number" || !Number.isInteger(cell) || cell < 0 || cell >= 100) return;
    const shots = sea.shots[playerId] ??= [];
    if (shots.includes(cell)) return;
    shots.push(cell);
    const target = sea.fleets[opponent.id];
    if (target.every(ship => ship.every(position => shots.includes(position)))) {
      game.over = true;
      game.phase = "over";
      game.winnerId = playerId;
      sea.turn = "";
    } else if (!target.some(ship => ship.includes(cell))) {
      sea.turn = opponent.id;
    }
    await this.publish();
  }

  private async join(socket: WebSocket, packet: Record<string, unknown>) {
    const requestedMode: GameMode = packet.mode === "draw" || packet.mode === "sea" || packet.mode === "typing" || packet.mode === "four" || packet.mode === "pairs" || packet.mode === "cards" || packet.mode === "reaction" ? packet.mode : "sapper";
    if (!this.game && packet.create !== true) {
      socket.send(JSON.stringify({ type: "error", message: "Комната не найдена. Проверь код или создай новую." }));
      socket.close(1008, "room not found");
      return;
    }
    if (!this.game) this.game = freshGame(requestedMode);
    else if ((this.game.mode ?? "sapper") !== requestedMode) {
      socket.send(JSON.stringify({ type: "error", message: "Это комната другой игры. Переключись стрелкой и попробуй снова." }));
      socket.close(1008, "wrong game mode"); return;
    }
    const id = /^[\w-]{8,64}$/.test(String(packet.id ?? "")) ? String(packet.id) : crypto.randomUUID();
    const token = /^[\w-]{16,100}$/.test(String(packet.token ?? "")) ? String(packet.token) : "";
    const name = safeName(packet.name);
    let player = this.game.players.find(p => p.id === id);
    if (isTableMode(requestedMode) && this.game.phase === "lobby" && !player) {
      this.game.players = this.game.players.filter(p => p.online);
    }
    if (!player) {
      if ((requestedMode === "sea" && this.game.players.length >= 2) || (isTableMode(requestedMode) && this.game.players.filter(p => p.online).length >= tableLimit(requestedMode))) {
        socket.send(JSON.stringify({ type: "error", message: "В этой комнате уже два игрока." }));
        socket.close(1008, "room full"); return;
      }
      if (this.game.phase !== "lobby") { socket.send(JSON.stringify({ type: "error", message: "Партия уже началась. Новые игроки входят только в лобби." })); socket.close(1008, "game already started"); return; }
      if (this.game.players.filter(p => p.online).length >= MAX_PLAYERS) { socket.send(JSON.stringify({ type: "error", message: "В комнате уже 20 игроков." })); socket.close(1008, "room full"); return; }
      const usedColors = new Set(this.game.players.map(p => p.color));
      player = { id, token: token || crypto.randomUUID(), name, score: 0, explosions: 0, color: PLAYER_COLORS.find(color => !usedColors.has(color)) ?? PLAYER_COLORS[this.game.players.length % PLAYER_COLORS.length], flags: [], online: true };
      this.game.players.push(player);
      if (!this.game.hostId || !this.game.players.some(p => p.id === this.game!.hostId && p.online)) this.game.hostId = id;
      this.game.event = { kind: "joined", name, id };
    } else {
      if (isTableMode(requestedMode) && !player.online && this.game.players.filter(p => p.online).length >= tableLimit(requestedMode)) {
        socket.send(JSON.stringify({ type: "error", message: "В комнате уже максимум игроков." }));
        socket.close(1008, "room full"); return;
      }
      if (!token || token !== player.token) { socket.send(JSON.stringify({ type: "error", message: "Не удалось подтвердить участника комнаты. Создай новую комнату или проверь ссылку." })); socket.close(1008, "invalid player token"); return; }
      player.name = name; player.online = true; player.flags ??= []; player.explosions ??= 0; if (!player.color) player.color = PLAYER_COLORS[this.game.players.indexOf(player) % PLAYER_COLORS.length]; if (this.game.mode !== "draw" && !this.game.over) player.score = 0;
    }
    socket.serializeAttachment({ id, name } satisfies Identity);
    if(!player.recordProfile&&typeof packet.recordToken==="string"&&/^[\w-]{24,100}$/.test(packet.recordToken)){
      player.recordProfile=await profileHash(packet.recordToken);
    }
    if (this.game.mode === "draw" && this.game.phase === "playing" && this.game.drawing) {
      if (await this.advanceDrawDeadline()) return;
      await this.ctx.storage.setAlarm(this.game.drawing.endsAt);
    }
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
    if(this.game.phase==="playing"&&!this.game.recordMatch&&this.game.players.filter(p=>p.online).length>=2){
      this.game.recordMatch=crypto.randomUUID();
    }
    await this.ctx.storage.put("game", this.game);
    await this.recordResult();
    for (const socket of this.ctx.getWebSockets()) {
      const identity = socket.deserializeAttachment() as Identity | null;
      const player = identity?.id ? this.game.players.find(p => p.id === identity.id) : null;
      if (!player) continue;
      try { const state = stripSecrets(this.game, player); state.room = this.roomCode; socket.send(JSON.stringify(state)); } catch { /* socket closed between event and broadcast */ }
    }
  }

  private async recordResult(){
    const game=this.game;
    if(!game||game.phase!=="over"||game.recordSaved||!game.recordMatch||!game.winnerId)return;
    const winner=game.players.find(player=>player.id===game.winnerId);
    if(!winner)return;
    const mode=game.mode??"sapper";
    const elapsed=game.table?.reaction?.elapsed;
    const speed=game.typing?typingResults(game.typing,game.typing.endsAt).find(p=>p.id===winner.id)?.speed:undefined;
    const best=mode==="reaction"&&typeof elapsed==="number"?Math.max(1,Math.round(elapsed)):
      mode==="typing"&&typeof speed==="number"?Math.round(speed):null;
    try{
      const records=this.env.RECORDS.get(this.env.RECORDS.idFromName(mode));
      await records.award(game.recordMatch,winner.recordProfile??await profileHash(winner.token),winner.name,best,mode==="reaction");
      game.recordSaved=true;
      await this.ctx.storage.put("game",game);
    }catch(error){console.error("Could not record match",game.recordMatch,error);}
  }

  webSocketClose(socket: WebSocket) { return this.serialize(async () => { await this.removePlayer(socket); }); }
  webSocketError(socket: WebSocket) { return this.serialize(async () => { await this.removePlayer(socket); }); }

  private async removePlayer(socket: WebSocket) {
    await this.init;
    const identity = socket.deserializeAttachment() as Identity | null;
    if (!this.game || !identity?.id) return;
    if (this.ctx.getWebSockets().some(other => other !== socket && other.readyState === WebSocket.OPEN && (other.deserializeAttachment() as Identity | null)?.id === identity.id)) return;
    const player = this.game.players.find(p => p.id === identity.id);
    if (player) player.online = false;
    const wasDrawer = this.game.mode === "draw" && this.game.phase === "playing" && this.game.drawing?.drawerId === identity.id;
    if (this.game.phase === "lobby" && this.game.hostId === identity.id) this.game.hostId = this.game.players.find(p => p.online)?.id ?? identity.id;
    if (this.ctx.getWebSockets().filter(ws => ws.readyState === WebSocket.OPEN).length === 0) await this.ctx.storage.setAlarm(Date.now() + 6 * 60 * 60 * 1000);
    if (wasDrawer && this.ctx.getWebSockets().some(ws => ws.readyState === WebSocket.OPEN)) await this.endDrawRound();
    else await this.publish();
  }

  alarm(): Promise<void> {
    return this.serialize(async () => {
      await this.init;
      if (!this.ctx.getWebSockets().some(ws => ws.readyState === WebSocket.OPEN)) { this.game = null; await this.ctx.storage.deleteAll(); return; }
      if (this.game?.config?.rules === "classic" && this.game.phase === "playing") {
        if (await this.expireClassicPlayers()) await this.publish();
        else await this.scheduleClassicAlarm();
      }
      if (this.game?.mode === "draw" && this.game.phase === "playing" && this.game.drawing) {
        if (!(await this.advanceDrawDeadline())) await this.ctx.storage.setAlarm(this.game.drawing.endsAt);
      }
      if (this.game?.phase === "playing" && this.game.table?.reaction && !this.game.table.reaction.ready) {
        this.game.table.reaction.ready = true;
        this.game.table.reaction.signalAt = Date.now();
        await this.publish();
      }
      if (this.game?.mode === "typing" && this.game.phase === "playing" && this.game.typing) {
        if (Date.now() >= this.game.typing.endsAt) await this.finishTyping();
        else await this.ctx.storage.setAlarm(this.game.typing.endsAt);
      }
    });
  }
}
