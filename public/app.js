(() => {
  "use strict";
  const W = 16, H = 16, MINES = 33, FLAG_LIMIT = 17, MAX_PLAYERS = 20;
  const $ = id => document.getElementById(id);
  const ui = {
    landing: $("landing"), game: $("game"), name: $("player-name"), roomInput: $("room-code"), error: $("lobby-error"), board: $("board"), playerList: $("players-list"), status: $("game-status"),
    connection: $("connection-label"), room: $("room-label"), shareCode: $("share-code"), playerCount: $("player-count"), flagsLeft: $("flags-left"), found: $("found-count"), mineCount: $("mine-count"), safe: $("safe-count"), progress: $("progress-bar"), score: $("my-score"), flagMode: $("flag-mode"), toast: $("toast")
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
    game = { cells: makeBoard(), players: [{ id: myId, name: cleanName() || "Смотритель", score: 0, flagsUsed: 0, explosions: 0, online: true }], myFlags: [], found: 0, safe: 0, over: false };
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
        game = { cells: message.cells, players: message.players, myFlags: message.myFlags || [], flagsUsed: message.flagsUsed || 0, found: message.found, safe: message.safe, over: message.over };
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
  function personalFlags(id) { return solo ? game.myFlags : (id === myId ? game.myFlags : []); }
  function localAction(id, type, index) {
    const cell = game.cells[index], player = game.players.find(p => p.id === id);
    if (!player || !cell || cell.open) return;
    const flags = personalFlags(id);
    if (type === "flag") {
      const existing = flags.indexOf(index);
      if (existing >= 0) { flags.splice(existing, 1); draw(); if (!solo) socket.send(JSON.stringify({ type, index })); return; }
      const used = solo ? player.flagsUsed : game.flagsUsed;
      if (used >= FLAG_LIMIT) { if (id === myId) setStatus("Все 17 попыток с флажком израсходованы.", "hit"); return; }
      if (solo) player.flagsUsed++; else game.flagsUsed++;
      flags.push(index);
      if (cell.mine) {
        cell.open = true; cell.by = player.name; player.score += 2; game.found++;
        game.players.forEach(p => { const list = personalFlags(p.id); const at = list.indexOf(index); if (at >= 0) list.splice(at, 1); });
        if (id === myId) setStatus("Нашёл мину первым. +2 очка — осторожно дальше.", "found");
      } else if (id === myId) setStatus("Флажок поставлен. Попытка потрачена — проверь соседние числа.");
      finishIfDone(); draw();
      if (solo) scheduleBot(1200 + Math.random() * 1000);
      return;
    }
    if (flags.includes(index)) { if (id === myId) setStatus("Сначала сними свой флажок. Повторное нажатие на флажок отменяет попытку.", "hit"); return; }
    openCells([index], id);
    if (solo) scheduleBot(1400 + Math.random() * 1900);
  }
  function openCells(indices, playerId) {
    const player = game.players.find(p => p.id === playerId); if (!player) return;
    for (const i of indices) {
      const cell = game.cells[i]; if (!cell || cell.open) continue;
      cell.open = true; cell.by = player.name;
      if (cell.mine) { cell.boom = true; player.score -= 3; player.explosions++; if (playerId === myId) setStatus("Подрыв! −3 очка. Остальные мины ещё скрыты.", "hit"); }
      else { game.safe++; if (!cell.near) for (const j of neighbors(i)) if (!game.cells[j].open && !game.cells[j].mine) game.cells[j].open = true; }
    }
    finishIfDone(); draw();
  }
  function finishIfDone() { if (game && game.found >= MINES) { game.over = true; setStatus("Все мины найдены. Победил тот, кто обошёлся без подрывов!", "found"); } }
  function summarize(event) {
    if (!event) return;
    if (event.kind === "found") setStatus(`${event.name} нашёл мину и получил +2.`, "found");
    else if (event.kind === "boom") setStatus(`${event.name} подорвался: −3 очка.`, "hit");
    else if (event.kind === "falseflag" && event.id === myId) setStatus("Тут пусто. Попытка с флажком потрачена.", "hit");
    else if (event.kind === "safe") setStatus(`${event.name} проверил клетку. Цифры подскажут, где мина.`);
    else if (event.kind === "joined") notify(`${event.name} сел за стол`);
  }
  function draw() {
    if (!game) return;
    ui.board.replaceChildren();
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < game.cells.length; i++) {
      const c = game.cells[i], button = document.createElement("button"); button.type = "button"; button.className = "cell"; button.setAttribute("role", "gridcell"); button.dataset.index = i;
      const mineFlag = c.open && c.mine;
      if (c.open) {
        button.classList.add("revealed");
        if (mineFlag) { button.classList.add("mine"); if (c.boom && c.by === currentPlayer()?.name) button.classList.add("exploded"); button.textContent = "✹"; button.setAttribute("aria-label", `Найденная мина, ${c.by || "подрыв"}`); }
        else if (c.near) { button.textContent = String(c.near); button.classList.add(`num-${c.near}`); button.setAttribute("aria-label", `Рядом мин: ${c.near}`); }
        else button.setAttribute("aria-label", "Безопасно");
      } else if (personalFlags(myId).includes(i)) { button.classList.add("personal-flag"); button.textContent = ""; button.setAttribute("aria-label", "Твой флажок; нажми правой кнопкой или ещё раз на телефоне, чтобы снять"); }
      else button.setAttribute("aria-label", "Неизвестная клетка");
      if (c.open || game.over) button.disabled = true;
      button.addEventListener("click", () => { if (flagMode) sendAction("flag", i); else sendAction("open", i); });
      button.addEventListener("contextmenu", event => { event.preventDefault(); sendAction("flag", i); });
      fragment.appendChild(button);
    }
    ui.board.appendChild(fragment);
    const found = game.found || game.cells.filter(c => c.open && c.mine).length;
    ui.found.textContent = found; ui.safe.textContent = Math.max(0, W * H - MINES - game.safe); ui.mineCount.textContent = MINES - found; ui.progress.style.width = `${100 * found / MINES}%`;
    const me = currentPlayer(); ui.score.textContent = me ? me.score : 0;
    const used = solo ? (me?.flagsUsed || 0) : (game.flagsUsed || 0); ui.flagsLeft.textContent = Math.max(0, FLAG_LIMIT - used);
    ui.playerCount.textContent = `${game.players.filter(p => p.online !== false).length} / ${MAX_PLAYERS}`;
    ui.playerList.replaceChildren();
    for (const [rank, player] of game.players.toSorted((a, b) => b.score - a.score).entries()) {
      const row = document.createElement("li"), name = document.createElement("span"), points = document.createElement("span"), avatar = document.createElement("span"), wrapper = document.createElement("span");
      row.className = "player-row" + (player.id === myId ? " player-me" : ""); avatar.className = "player-avatar"; avatar.textContent = (player.name || "?").slice(0, 1).toUpperCase(); wrapper.className = "player-name"; wrapper.textContent = player.name + (player.online === false ? " · вышел" : ""); points.className = "player-points"; points.textContent = String(player.score);
      row.append(avatar, wrapper, points); ui.playerList.append(row);
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
      if (needed > 0 && needed === around.length) { foundTarget = around.find(i => game.cells[i].mine) ?? around[0]; break; }
      if (needed === 0 && around.length) { safeTarget = around.find(i => !game.cells[i].mine) ?? around[0]; break; }
    }
    if (foundTarget == null && safeTarget == null) {
      const safe = unknown.filter(x => !x.c.mine && !game.myFlags.includes(x.i) && !bot.flags.includes(x.i));
      const pool = safe.length ? safe : unknown.filter(x => !bot.flags.includes(x.i));
      if (!pool.length) return;
      const picked = pool[Math.floor(Math.random() * pool.length)];
      const safeArea = floodCandidates(picked.i);
      openCells(safeArea, bot.id);
    } else if (foundTarget != null) {
      bot.flagsUsed++;
      if (game.cells[foundTarget].mine) { game.cells[foundTarget].open = true; game.cells[foundTarget].by = bot.name; bot.score += 2; game.found++; bot.flags.push(foundTarget); setStatus("Лесной дух нашёл мину первым. У тебя остались его следы.", "found"); }
      else { game.cells[foundTarget].open = true; game.cells[foundTarget].by = bot.name; bot.score -= 3; bot.explosions++; bot.flags.push(foundTarget); }
      finishIfDone(); draw();
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
  $("solo-start").addEventListener("click", () => { if (!cleanName()) return; roomId = "ДУЭЛЬ"; startView(roomId, "solo"); game.players.push({ id: "forest-spirit", name: "Лесной дух", score: 0, flagsUsed: 0, explosions: 0, flags: [], online: true }); draw(); scheduleBot(900); });
  ui.roomInput.addEventListener("input", () => { ui.roomInput.value = ui.roomInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6); });
  $("leave-room").addEventListener("click", () => teardown());
  $("copy-link").addEventListener("click", async () => { const link = `${location.origin}${location.pathname}?room=${encodeURIComponent(roomId)}`; try { await navigator.clipboard.writeText(link); notify("Ссылка на комнату скопирована"); } catch (_) { notify(`Код комнаты: ${roomId}`); } });
  ui.flagMode.addEventListener("click", () => { flagMode = !flagMode; ui.flagMode.setAttribute("aria-pressed", String(flagMode)); setStatus(flagMode ? "Режим флажка: коснись клетки, которую хочешь проверить." : "Режим проверки клетки."); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && game) teardown(); });
  window.addEventListener("beforeunload", () => { if (socket) socket.close(); });
  if (savedRoom) { ui.connection.textContent = "КОМНАТА ДРУЗЬЕЙ"; }
})();
