(() => {
  "use strict";
  const W = 16, H = 16, MINES = 33, SAFE_COUNT = 223, FLAG_LIMIT = 17, MAX_PLAYERS = 20;
  const PLAYER_COLORS = ["#f2c66d", "#72c7e7", "#e889a0", "#9bd27a", "#bd9af0", "#f39a5e", "#65d2bb", "#df8add", "#a9bdff", "#d2dc72", "#ff8580", "#80d8e8", "#ffc978", "#90b8f0", "#c2dc85", "#eea7c7", "#70d5a0", "#e8a567", "#9e9cf2", "#c7d0da"];
  const $ = id => document.getElementById(id);
  const ui = {
    landing: $("landing"), game: $("game"), name: $("player-name"), roomInput: $("room-code"), error: $("lobby-error"), board: $("board"), playerList: $("players-list"), status: $("game-status"),
    connection: $("connection-label"), room: $("room-label"), shareCode: $("share-code"), playerCount: $("player-count"), flagsLeft: $("flags-left"), flagCap: $("flag-cap"), found: $("found-count"), mineCount: $("mine-count"), safe: $("safe-count"), progress: $("progress-bar"), score: $("my-score"), flagMode: $("flag-mode"), toast: $("toast")
  };
  const rememberedName = localStorage.getItem("forest-mines-name");
  if (rememberedName) ui.name.value = rememberedName;
  const savedRoom = new URLSearchParams(location.search).get("room");
  if (savedRoom) ui.roomInput.value = savedRoom.toUpperCase().slice(0, 6);

  let game = null, socket = null, solo = false, botTimer = 0, flagMode = false, roomId = "", myId = "", toastTimer = 0;
  function showError(message) { ui.error.textContent = message; }
  function notify(message) { ui.toast.textContent = message; ui.toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => ui.toast.classList.remove("show"), 2600); }
  function setStatus(message, mood = "") { ui.status.lastElementChild.textContent = message; ui.status.classList.toggle("hit", mood === "hit"); ui.status.classList.toggle("found", mood === "found"); }
  function newId() { return crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`; }
  function cleanName() {
    const value = ui.name.value.trim().replace(/[<>\u0000-\u001f]/g, "").slice(0, 20);
    if (!value) { showError("Напиши имя смотрителя — хотя бы одно слово."); ui.name.focus(); return ""; }
    localStorage.setItem("forest-mines-name", value); showError(""); return value;
  }
  function makeBoard() {
    const cells = Array.from({ length: W * H }, () => ({ mine: false, near: 0, open: false, boom: false, by: "" }));
    let count = 0;
    while (count < MINES) { const i = Math.floor(Math.random() * cells.length); if (!cells[i].mine) { cells[i].mine = true; count++; } }
    for (let i = 0; i < cells.length; i++) if (!cells[i].mine) cells[i].near = neighbors(i).filter(j => cells[j].mine).length;
    return cells;
  }
  function neighbors(i) {
    const x = i % W, y = Math.floor(i / W), out = [];
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if ((!dx && !dy) || x + dx < 0 || x + dx >= W || y + dy < 0 || y + dy >= H) continue;
      out.push((y + dy) * W + x + dx);
    }
    return out;
  }
  function startView(id, mode) {
    roomId = id; solo = mode === "solo"; myId = "local-player";
    game = { cells: makeBoard(), players: [{ id: myId, name: cleanName() || "Смотритель", score: 0, color: PLAYER_COLORS[0], flags: [], online: true }], safe: 0, over: false };
    showGame(mode); draw(); setStatus(solo ? "Лесной дух вышел на тропу. Найди его следы." : "Комната создана. Позови остальных за стол.");
  }
  function showGame(mode) {
    ui.landing.classList.add("hidden"); ui.game.classList.remove("hidden");
    ui.connection.textContent = mode === "solo" ? "ОДИНОЧНЫЙ РЕЖИМ · БОТ" : mode === "online" ? "В СЕТИ · LIVE" : "КОМНАТА ГОТОВА";
    ui.room.textContent = "#" + roomId; ui.shareCode.textContent = roomId; history.replaceState({}, "", `?room=${encodeURIComponent(roomId)}`);
  }
  function apiAddress() {
    const raw = window.MINES_CONFIG && window.MINES_CONFIG.api;
    if (!raw) return "";
    return raw.replace(/^http:/i, "ws:").replace(/^https:/i, "wss:").replace(/\/$/, "");
  }
  function enterRoom(code, makeNew) {
    const name = cleanName(); if (!name) return;
    const api = apiAddress();
    if (!api) { showError("Сервер комнаты ещё не подключён. Пока можно сыграть одному против лесного духа."); return; }
    roomId = code;
    myId = localStorage.getItem(`forest-mines-player:${roomId}`) || newId();
    localStorage.setItem(`forest-mines-player:${roomId}`, myId);
    [$("create-room"), $("join-room")].forEach(b => b.disabled = true);
    showError("Открываю дверь в комнату…");
    const protocol = api.includes("wss:") ? "wss:" : "ws:";
    const host = api.replace(/^wss?:\/\//i, "");
    try {
      socket = new WebSocket(`${protocol}//${host}/api/room/${encodeURIComponent(roomId)}?create=${makeNew ? "1" : "0"}`);
    } catch (_) { [$("create-room"), $("join-room")].forEach(b => b.disabled = false); showError("Не удалось открыть соединение. Проверь адрес сервера."); return; }
    socket.addEventListener("open", () => socket.send(JSON.stringify({ type: "join", id: myId, name, create: makeNew })));
    socket.addEventListener("message", event => {
      let message; try { message = JSON.parse(event.data); } catch (_) { return; }
      if (message.type === "error") { showError(message.message || "Сервер отклонил вход."); teardown(false); return; }
      if (message.type === "notice") { setStatus(message.text || "Действие недоступно.", "hit"); return; }
      if (message.type === "state") {
        game = { cells: message.cells, players: message.players, safe: message.safe, over: message.over };
        myId = message.me; roomId = message.room; ui.error.textContent = ""; showGame("online"); draw();
        if (message.event) summarize(message.event);
      }
    });
    socket.addEventListener("close", () => { if (game && !solo) { setStatus("Связь с комнатой прервалась. Проверь интернет и зайди ещё раз.", "hit"); notify("Соединение закрыто"); } });
    socket.addEventListener("error", () => { [$("create-room"), $("join-room")].forEach(b => b.disabled = false); showError("Не удалось соединиться с сервером комнаты."); });
  }
  function teardown(returnToMenu = true) {
    clearTimeout(botTimer);
    if (socket) { socket.close(); socket = null; }
    game = null; solo = false; roomId = ""; flagMode = false; ui.flagMode.setAttribute("aria-pressed", "false");
    [$("create-room"), $("join-room")].forEach(b => b.disabled = false);
    if (returnToMenu) { ui.game.classList.add("hidden"); ui.landing.classList.remove("hidden"); ui.connection.textContent = "ОДИНОЧНЫЙ РЕЖИМ"; history.replaceState({}, "", location.pathname); }
  }
  function sendAction(type, index) {
    if (!game || game.over) return;
    if (!solo) { if (socket && socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type, index })); return; }
    localAction(myId, type, index);
  }
  function personalFlags(id) { return game.players.find(p => p.id === id)?.flags || []; }
  function localAction(id, type, index) {
    const cell = game.cells[index], player = game.players.find(p => p.id === id);
    if (!player || !cell) return;
    const flags = personalFlags(id);
    if (type === "flag") {
      const existing = flags.indexOf(index);
      if (existing >= 0) flags.splice(existing, 1);
      else {
        if (cell.open) return;
        if (flags.length >= FLAG_LIMIT) { if (id === myId) setStatus("У тебя уже стоят все 17 флажков. Сними один, чтобы переставить.", "hit"); return; }
        flags.push(index);
      }
      if (id === myId) setStatus(existing >= 0 ? "Флажок снят — место снова свободно." : "Твоя цветная метка поставлена. Мины проверят в конце.");
      draw();
      if (solo) scheduleBot(1200 + Math.random() * 1000);
      return;
    }
    if (cell.open || cell.mine) return;
    openCells(floodCandidates(index), id);
    if (solo) scheduleBot(1400 + Math.random() * 1900);
  }
  function openCells(indices, playerId) {
    const player = game.players.find(p => p.id === playerId); if (!player) return;
    for (const i of indices) {
      const cell = game.cells[i]; if (!cell || cell.open || cell.mine) continue;
      cell.open = true; cell.by = player.name;
      game.safe++;
      if (playerId === "forest-spirit") player.flags = player.flags.filter(flag => flag !== i);
    }
    finishIfDone(); draw();
  }
  function finishIfDone() {
    if (!game || game.over || game.safe < SAFE_COUNT) return;
    game.over = true;
    for (const player of game.players) player.score = player.flags.reduce((sum, index) => sum + (game.cells[index].mine ? 2 : 0), 0);
    const top = Math.max(...game.players.map(player => player.score));
    const winners = game.players.filter(player => player.score === top).map(player => player.name);
    setStatus(`Итог: ${winners.join(", ")} — ${top} очков за точные флажки.`, "found");
  }
  function summarize(event) {
    if (!event) return;
    if (event.kind === "finished") {
      const top = Math.max(...game.players.map(player => player.score));
      const winners = game.players.filter(player => player.score === top).map(player => player.name);
      setStatus(`Итог: ${winners.join(", ")} — ${top} очков за точные флажки.`, "found");
    }
    else if (event.kind === "joined") notify(`${event.name} сел за стол`);
  }
  function draw() {
    if (!game) return;
    ui.board.replaceChildren();
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < game.cells.length; i++) {
      const c = game.cells[i], button = document.createElement("button"); button.type = "button"; button.className = "cell"; button.setAttribute("role", "gridcell"); button.dataset.index = i;
      if (c.open || game.over) {
        button.classList.add("revealed");
        if (c.mine) { button.classList.add("mine"); button.textContent = "✹"; button.setAttribute("aria-label", "Мина"); }
        else if (c.near) { button.textContent = String(c.near); button.classList.add(`num-${c.near}`); button.setAttribute("aria-label", `Рядом мин: ${c.near}`); }
        else button.setAttribute("aria-label", "Безопасно");
      }
      const owners = game.players.filter(player => player.flags.includes(i));
      if (owners.length) {
        button.classList.add("player-flag"); if (c.open || game.over) button.classList.add("flagged-revealed");
        const stack = document.createElement("span"); stack.className = "flag-stack";
        for (const owner of owners.slice(0, 3)) { const mark = document.createElement("i"); mark.className = "flag-mark"; mark.style.setProperty("--flag-color", owner.color || PLAYER_COLORS[0]); mark.textContent = "⚑"; stack.append(mark); }
        if (owners.length > 3) { const extra = document.createElement("small"); extra.textContent = `+${owners.length - 3}`; stack.append(extra); }
        button.append(stack); button.setAttribute("aria-label", `Флажки: ${owners.map(owner => owner.name).join(", ")}`);
      } else if (!c.open) button.setAttribute("aria-label", "Неизвестная клетка");
      if ((c.open && !personalFlags(myId).includes(i)) || game.over) button.disabled = true;
      button.addEventListener("click", () => { if (flagMode) sendAction("flag", i); else sendAction("open", i); });
      button.addEventListener("contextmenu", event => { event.preventDefault(); sendAction("flag", i); });
      fragment.appendChild(button);
    }
    ui.board.appendChild(fragment);
    ui.found.textContent = game.safe; ui.safe.textContent = Math.max(0, SAFE_COUNT - game.safe); ui.mineCount.textContent = MINES; ui.progress.style.width = `${100 * game.safe / SAFE_COUNT}%`;
    const me = currentPlayer(); ui.score.textContent = game.over && me ? me.score : "—";
    const label = document.getElementById("score-label"); if (label) label.textContent = game.over ? "ТВОЙ ИТОГ" : "РЕЗУЛЬТАТ В КОНЦЕ";
    ui.flagsLeft.textContent = Math.max(0, FLAG_LIMIT - (me?.flags.length || 0)); ui.flagCap.textContent = FLAG_LIMIT;
    ui.playerCount.textContent = `${game.players.filter(p => p.online !== false).length} / ${MAX_PLAYERS}`;
    ui.playerList.replaceChildren();
    for (const [rank, player] of game.players.toSorted((a, b) => b.score - a.score).entries()) {
      const row = document.createElement("li"), points = document.createElement("span"), avatar = document.createElement("span"), details = document.createElement("span"), name = document.createElement("span"), resources = document.createElement("span");
      const left = Math.max(0, FLAG_LIMIT - (player.flags?.length || 0));
      row.className = "player-row" + (player.id === myId ? " player-me" : ""); avatar.className = "player-avatar"; avatar.textContent = (player.name || "?").slice(0, 1).toUpperCase(); avatar.style.color = player.color || PLAYER_COLORS[0]; details.className = "player-details"; name.className = "player-name"; name.textContent = player.name + (player.online === false ? " · вышел" : ""); resources.className = "player-sub"; resources.textContent = `⚑ ${left} свободно`; points.className = "player-points"; points.textContent = game.over ? String(player.score) : "—";
      details.append(name, resources); row.append(avatar, details, points); ui.playerList.append(row);
    }
    ui.board.classList.toggle("game-over", Boolean(game.over));
  }
  function currentPlayer() { return game?.players.find(p => p.id === myId); }
  function scheduleBot(delay) { clearTimeout(botTimer); if (solo && !game.over) botTimer = setTimeout(botTurn, delay); }
  function botTurn() {
    if (!solo || !game || game.over) return;
    const bot = game.players.find(p => p.id === "forest-spirit"); if (!bot) return;
    const unknown = game.cells.map((c, i) => ({ c, i })).filter(x => !x.c.open);
    if (!unknown.length) return;
    const open = game.cells.map((c, i) => ({ c, i })).filter(x => x.c.open && !x.c.mine && x.c.near);
    let foundTarget = null, safeTarget = null;
    for (const clue of open) {
      const around = neighbors(clue.i).filter(i => !game.cells[i].open && !bot.flags.includes(i));
      const needed = clue.c.near - neighbors(clue.i).filter(i => bot.flags.includes(i)).length;
      if (needed > 0 && needed === around.length) { foundTarget = around[0]; break; }
      if (needed === 0 && around.length) { safeTarget = around[0]; break; }
    }
    if (foundTarget == null && safeTarget == null) {
      // With no forced deduction the spirit takes a true guess; it does not
      // consult the hidden mine layout to avoid risk.
      const pool = unknown.filter(x => !bot.flags.includes(x.i));
      if (!pool.length) return;
      const picked = pool[Math.floor(Math.random() * pool.length)];
      const safeArea = floodCandidates(picked.i);
      openCells(safeArea, bot.id);
    } else if (foundTarget != null) {
      if (bot.flags.length >= FLAG_LIMIT) bot.flags.shift();
      bot.flags.push(foundTarget); draw();
    } else openCells(floodCandidates(safeTarget), bot.id);
    scheduleBot(1250 + Math.random() * 1900);
  }
  function floodCandidates(start) {
    if (!game.cells[start] || game.cells[start].mine) return [start];
    const found = new Set([start]), queue = [start];
    while (queue.length) { const i = queue.shift(); if (game.cells[i].near) continue; for (const j of neighbors(i)) if (!game.cells[j].mine && !found.has(j)) { found.add(j); queue.push(j); } }
    return [...found];
  }
  function makeRoomCode() { const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""); }
  $("create-room").addEventListener("click", () => enterRoom(makeRoomCode(), true));
  $("join-room").addEventListener("click", () => { const code = ui.roomInput.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, ""); if (code.length < 4 || code.length > 6) { showError("Код комнаты — от 4 до 6 букв или цифр."); return; } enterRoom(code, false); });
  $("solo-start").addEventListener("click", () => { if (!cleanName()) return; roomId = "ДУЭЛЬ"; startView(roomId, "solo"); game.players.push({ id: "forest-spirit", name: "Лесной дух", score: 0, color: PLAYER_COLORS[1], flags: [], online: true }); draw(); scheduleBot(900); });
  ui.roomInput.addEventListener("input", () => { ui.roomInput.value = ui.roomInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6); });
  $("leave-room").addEventListener("click", () => teardown());
  $("copy-link").addEventListener("click", async () => { const link = `${location.origin}${location.pathname}?room=${encodeURIComponent(roomId)}`; try { await navigator.clipboard.writeText(link); notify("Ссылка на комнату скопирована"); } catch (_) { notify(`Код комнаты: ${roomId}`); } });
  ui.flagMode.addEventListener("click", () => { flagMode = !flagMode; ui.flagMode.setAttribute("aria-pressed", String(flagMode)); setStatus(flagMode ? "Режим флажка: коснись клетки, которую хочешь проверить." : "Режим проверки клетки."); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && game) teardown(); });
  window.addEventListener("beforeunload", () => { if (socket) socket.close(); });
  if (savedRoom) { ui.connection.textContent = "КОМНАТА ДРУЗЬЕЙ"; }
})();
