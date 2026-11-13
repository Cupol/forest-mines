(() => {
  "use strict";
  const MAX_PLAYERS = 20;
  const PRESETS = {
    small: { width: 12, height: 12, mines: 18, flags: 9 },
    medium: { width: 16, height: 16, mines: 33, flags: 17 },
    large: { width: 24, height: 24, mines: 120, flags: 22 }
  };
  const PLAYER_COLORS = ["#f2c66d", "#72c7e7", "#e889a0", "#9bd27a", "#bd9af0", "#f39a5e", "#65d2bb", "#df8add", "#a9bdff", "#d2dc72", "#ff8580", "#80d8e8", "#ffc978", "#90b8f0", "#c2dc85", "#eea7c7", "#70d5a0", "#e8a567", "#9e9cf2", "#c7d0da"];
  const $ = id => document.getElementById(id);
  const ui = {
    landing: $("landing"), game: $("game"), name: $("player-name"), roomInput: $("room-code"), error: $("lobby-error"), board: $("board"), playerList: $("players-list"), status: $("game-status"),
    connection: $("connection-label"), room: $("room-label"), shareCode: $("share-code"), playerCount: $("player-count"), flagsLeft: $("flags-left"), flagCap: $("flag-cap"), found: $("found-count"), safeTotal: $("safe-total"), mineCount: $("mine-count"), safe: $("safe-count"), progress: $("progress-bar"), score: $("my-score"), flagMode: $("flag-mode"), toast: $("toast"), createBoard: $("create-board"), copyLink: $("copy-link"), roomSetup: $("room-setup"), hostSettings: $("host-settings"), guestWaiting: $("guest-waiting"), setupPlayers: $("setup-players"), setupPlayerCount: $("setup-player-count"), setupShareCode: $("setup-share-code"), dashboard: $("dashboard"), heading: $("game-heading"), settingsSummary: $("settings-summary"), phaseHint: $("phase-hint"), winnerOverlay: $("winner-overlay"), winnerTitle: $("winner-title"), winnerMessage: $("winner-message"),
    drawLobby: $("draw-lobby"), drawHostSettings: $("draw-host-settings"), drawGuestWaiting: $("draw-guest-waiting"), drawLobbyPlayers: $("draw-lobby-players"), drawLobbyCount: $("draw-lobby-player-count"), drawLobbyCode: $("draw-lobby-code"), drawLobbyError: $("draw-lobby-error"), drawDashboard: $("draw-dashboard"), drawCanvas: $("draw-canvas"), drawTools: $("draw-tools"), drawWord: $("draw-word"), drawClock: $("draw-clock"), drawRound: $("draw-round-label"), drawTurn: $("draw-turn-label"), drawPlayerCount: $("draw-player-count"), drawScores: $("draw-scores"), drawChat: $("draw-chat"), drawGuessForm: $("draw-guess-form"), drawGuess: $("draw-guess")
  };
  const rememberedName = localStorage.getItem("forest-mines-name");
  if (rememberedName) ui.name.value = rememberedName;
  const savedRoom = new URLSearchParams(location.search).get("room");
  const savedMode = new URLSearchParams(location.search).get("game");
  let selectedMode = savedMode === "draw" ? "draw" : "sapper";
  if (savedRoom) ui.roomInput.value = savedRoom.toUpperCase().slice(0, 6);

  let game = null, socket = null, solo = false, botTimer = 0, flagMode = false, flagLimitCustom = false, roomId = "", myId = "", myToken = "", toastTimer = 0, winnerDismissed = false, drawingColor = "#17201c", activeStroke = null, drawClockTimer = 0;
  function showError(message) { ui.error.textContent = message; }
  let drawingTool = "pen", activeStrokeRound = 0, activePointerId = null;
  function applySelectedMode() {
    const drawing = selectedMode === "draw";
    document.body.dataset.game = selectedMode;
    document.title = drawing ? "Рисуй и угадывай — Круг друзей" : "Сапёр — Круг друзей";
    $("game-index").textContent = drawing ? "ИГРА 2 / 2" : "ИГРА 1 / 2";
    $("hero-eyebrow").textContent = drawing ? "СЛОВО ЗАДАНО. ТВОЯ ОЧЕРЕДЬ РИСОВАТЬ." : "ТИШЕ. СЛУШАЙ. СМОТРИ ПОД НОГИ.";
    $("hero-title").innerHTML = drawing ? "Рисуй и<br><em>угадывай</em>" : "<em>Сапёр</em>";
    $("hero-description").textContent = drawing ? "Рисуй загаданное слово, пока друзья угадывают. Очки получают самые быстрые догадчики." : "Каждый ставит свои цветные флажки на подозрительные клетки. Если открыть мину, она взорвётся; остальные мины останутся скрыты до конца партии.";
    $("hero-rules").innerHTML = drawing ? "<span><b>✎</b> рисуй по очереди</span><span><b>⌛</b> угадай за минуту</span><span><b>★</b> очки за скорость</span>" : "<span><b>↕</b> лимит флажков зависит от числа игроков</span><span><b>+2 / −3</b> находка / подрыв</span><span><b>🎨</b> свой цвет</span>";
    $("create-room-text").textContent = drawing ? "Создать комнату рисования" : "Создать комнату";
    $("solo-start").textContent = drawing ? "Порисовать одному (практика) →" : "Сыграть с ботом →";
  }
  let switchingGame = false;
  async function changeGame() {
    if (switchingGame || $("create-room").disabled) return;
    switchingGame = true;
    const buttons = [$("game-prev"), $("game-next"), $("create-room"), $("join-room"), $("solo-start")];
    buttons.forEach(button => button.disabled = true);
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 200;
    ui.landing.classList.add("game-switching");
    await new Promise(resolve => setTimeout(resolve, delay));
    selectedMode = selectedMode === "sapper" ? "draw" : "sapper";
    ui.roomInput.value = ""; showError(""); applySelectedMode();
    history.replaceState({}, "", `${location.pathname}?game=${selectedMode}`);
    ui.landing.classList.remove("game-switching");
    await new Promise(resolve => setTimeout(resolve, delay));
    buttons.forEach(button => button.disabled = false); switchingGame = false;
  }
  function notify(message) { ui.toast.textContent = message; ui.toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => ui.toast.classList.remove("show"), 2600); }
  function setStatus(message, mood = "") { ui.status.lastElementChild.textContent = message; ui.status.classList.toggle("hit", mood === "hit"); ui.status.classList.toggle("found", mood === "found"); }
  function newId() { return crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`; }
  function cleanName() {
    const value = ui.name.value.trim().replace(/[<>\u0000-\u001f]/g, "").slice(0, 20);
    if (!value) { showError("Напиши имя смотрителя — хотя бы одно слово."); ui.name.focus(); return ""; }
    localStorage.setItem("forest-mines-name", value); showError(""); return value;
  }
  function makeBoard(config) {
    const cells = Array.from({ length: config.width * config.height }, () => ({ mine: false, near: 0, open: false, boom: false, by: "" }));
    let count = 0;
    while (count < config.mines) { const i = Math.floor(Math.random() * cells.length); if (!cells[i].mine) { cells[i].mine = true; count++; } }
    for (let i = 0; i < cells.length; i++) if (!cells[i].mine) cells[i].near = neighbors(i, config).filter(j => cells[j].mine).length;
    return cells;
  }
  function protectFirstOpen(cells, index, config) {
    if (cells.some(cell => cell.open) || !cells[index]?.mine) return;
    const safe = cells.map((cell, i) => !cell.mine && i !== index ? i : -1).filter(i => i >= 0);
    if (!safe.length) return;
    const replacement = safe[Math.floor(Math.random() * safe.length)];
    cells[index].mine = false; cells[replacement].mine = true;
    for (let i = 0; i < cells.length; i++) cells[i].near = cells[i].mine ? 0 : neighbors(i, config).filter(j => cells[j].mine).length;
  }
  function neighbors(i, config = game.config) {
    const x = i % config.width, y = Math.floor(i / config.width), out = [];
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if ((!dx && !dy) || x + dx < 0 || x + dx >= config.width || y + dy < 0 || y + dy >= config.height) continue;
      out.push((y + dy) * config.width + x + dx);
    }
    return out;
  }
  function startView(id, mode, config) {
    roomId = id; solo = mode === "solo"; myId = "local-player";
    game = { mode: "sapper", config, cells: makeBoard(config), players: [{ id: myId, name: cleanName() || "Смотритель", score: 0, explosions: 0, color: PLAYER_COLORS[0], flags: [], online: true }], safe: 0, phase: "playing", hostId: myId, over: false, winnerId: "" };
    showGame(mode); draw(); setStatus(solo ? "Партия с ботом началась." : "Комната создана. Позови остальных за стол.");
  }
  function showGame(mode) {
    document.body.dataset.game = selectedMode;
    ui.landing.classList.add("hidden"); ui.game.classList.remove("hidden");
    ui.connection.textContent = mode === "solo" ? "ОДИНОЧНЫЙ РЕЖИМ · БОТ" : mode === "online" ? "В СЕТИ · LIVE" : mode === "draw" ? "ПРАКТИКА РИСОВАНИЯ" : "КОМНАТА ГОТОВА";
    ui.room.textContent = "#" + roomId; ui.shareCode.textContent = roomId; history.replaceState({}, "", `?room=${encodeURIComponent(roomId)}&game=${selectedMode}`);
  }
  function apiAddress() {
    const raw = window.MINES_CONFIG && window.MINES_CONFIG.api;
    if (!raw) return "";
    return raw.replace(/^http:/i, "ws:").replace(/^https:/i, "wss:").replace(/\/$/, "");
  }
  function automaticFlagLimit(mines, players) {
    const count = Math.max(1, players), spareFactor = Math.min(2, 1 + 0.25 * (count - 1));
    return Math.max(1, Math.ceil(mines * spareFactor / count));
  }
  function refreshAutomaticFlagLimit(force = false) {
    if (flagLimitCustom && !force) return;
    const mineCount = Number($("mine-total").value) || PRESETS.medium.mines;
    const players = game?.players.filter(player => player.online !== false).length || 1;
    $("flag-total").value = automaticFlagLimit(mineCount, players);
  }
  function chosenSettings(inRoom = false) {
    const error = inRoom ? $("setup-error") : ui.error;
    const config = { width: Number($("board-width").value), height: Number($("board-height").value), mines: Number($("mine-total").value), flags: Number($("flag-total").value) };
    const total = config.width * config.height;
    if (![config.width, config.height, config.mines, config.flags].every(Number.isInteger) || config.width < 8 || config.width > 30 || config.height < 8 || config.height > 30 || config.mines < 1 || config.mines >= total || config.flags < 1 || config.flags > total) {
      error.textContent = "Размер поля: от 8 до 30 клеток по каждой стороне. Укажи допустимое число мин и флажков."; return null;
    }
    error.textContent = ""; return config;
  }
  function enterRoom(code, makeNew) {
    const name = cleanName(); if (!name) return;
    if (makeNew) flagLimitCustom = false;
    const api = apiAddress();
    if (!api) { showError("Сервер комнаты ещё не подключён. Пока доступна одиночная игра."); return; }
    roomId = code;
    myId = localStorage.getItem(`forest-mines-player:${roomId}`) || newId();
    myToken = localStorage.getItem(`forest-mines-token:${roomId}`) || `${newId()}${newId()}`;
    localStorage.setItem(`forest-mines-player:${roomId}`, myId);
    localStorage.setItem(`forest-mines-token:${roomId}`, myToken);
    [$("create-room"), $("join-room")].forEach(b => b.disabled = true);
    showError("Открываю дверь в комнату…");
    const protocol = api.includes("wss:") ? "wss:" : "ws:";
    const host = api.replace(/^wss?:\/\//i, "");
    try {
      socket = new WebSocket(`${protocol}//${host}/api/room/${encodeURIComponent(roomId)}?create=${makeNew ? "1" : "0"}&game=${selectedMode}`);
    } catch (_) { [$("create-room"), $("join-room")].forEach(b => b.disabled = false); showError("Не удалось открыть соединение. Проверь адрес сервера."); return; }
    socket.addEventListener("open", () => socket.send(JSON.stringify({ type: "join", id: myId, token: myToken, name, create: makeNew, mode: selectedMode })));
    socket.addEventListener("message", event => {
      let message; try { message = JSON.parse(event.data); } catch (_) { return; }
      if (message.type === "error") { showError(message.message || "Сервер отклонил вход."); teardown(false); return; }
      if (message.type === "notice") { if (selectedMode === "draw") ui.drawLobbyError.textContent = message.text || "Действие недоступно."; else setStatus(message.text || "Действие недоступно.", "hit"); return; }
      if (message.type === "state") {
        selectedMode = message.mode === "draw" ? "draw" : "sapper";
        game = { mode: selectedMode, cells: message.cells, players: message.players, config: message.config, phase: message.phase, hostId: message.hostId, safe: message.safe, over: message.over, winnerId: message.winnerId || "", drawing: message.drawing, chat: message.chat || [] };
        roomId = message.room || roomId;
        if (message.token) { myToken = message.token; localStorage.setItem(`forest-mines-token:${roomId}`, myToken); }
        myId = message.me; ui.error.textContent = ""; showGame("online"); draw();
        if (message.event) summarize(message.event);
        else if (game.over && game.mode !== "draw") showWinner();
        if (game.phase === "lobby" && game.mode !== "draw") setStatus(game.hostId === myId ? "Комната открыта. Друзья могут присоединяться; выбери поле, когда будете готовы." : "Ты в лобби. Ждём, пока ведущий создаст поле.");
      }
    });
    socket.addEventListener("close", () => { if (game && !solo) { setStatus("Связь с комнатой прервалась. Проверь интернет и зайди ещё раз.", "hit"); notify("Соединение закрыто"); } });
    socket.addEventListener("error", () => { [$("create-room"), $("join-room")].forEach(b => b.disabled = false); showError("Не удалось соединиться с сервером комнаты."); });
  }
  function teardown(returnToMenu = true) {
    clearTimeout(botTimer); clearInterval(drawClockTimer); drawClockTimer = 0;
    activeStroke = null;
    if (socket) { socket.close(); socket = null; }
    game = null; solo = false; roomId = ""; flagMode = false; ui.flagMode.setAttribute("aria-pressed", "false");
    ui.winnerOverlay.classList.add("hidden"); winnerDismissed = false;
    [$("create-room"), $("join-room")].forEach(b => b.disabled = false);
    if (returnToMenu) { ui.game.classList.add("hidden"); ui.landing.classList.remove("hidden"); ui.connection.textContent = "ОДИНОЧНЫЙ РЕЖИМ"; applySelectedMode(); history.replaceState({}, "", `${location.pathname}?game=${selectedMode}`); }
  }
  function sendAction(type, index) {
    if (!game || game.over || game.phase !== "playing") return;
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
        if (game.players.some(other => other.id !== id && other.flags.includes(index))) { if (id === myId) setStatus("На этой клетке уже стоит флажок другого игрока.", "hit"); return; }
        if (flags.length >= game.config.flags) { if (id === myId) setStatus(`У тебя уже стоят все ${game.config.flags} флажков. Сними один, чтобы переставить.`, "hit"); return; }
        flags.push(index);
      }
      if (id === myId) setStatus(existing >= 0 ? "Флажок снят — место снова свободно." : "Твоя цветная метка поставлена. Мины проверят в конце.");
      draw();
      if (solo) scheduleBot(1200 + Math.random() * 1000);
      return;
    }
    if (cell.open) return;
    protectFirstOpen(game.cells, index, game.config);
    openCells(floodCandidates(index), id);
    if (solo) scheduleBot(1400 + Math.random() * 1900);
  }
  function openCells(indices, playerId) {
    const player = game.players.find(p => p.id === playerId); if (!player) return;
    for (const i of indices) {
      const cell = game.cells[i]; if (!cell || cell.open) continue;
      cell.open = true; cell.by = player.name;
      if (cell.mine) {
        cell.boom = true; player.explosions = (player.explosions || 0) + 1;
        if (playerId === myId) setStatus("Мина взорвалась! −3 очка. Игроки продолжают искать.", "hit");
      } else {
        game.safe++;
        if (playerId === "forest-spirit") player.flags = player.flags.filter(flag => flag !== i);
      }
    }
    finishIfDone(); draw();
  }
  function finishIfDone() {
    const safeCount = game ? game.cells.length - game.config.mines : 0;
    if (!game || game.over || game.safe < safeCount) return;
    game.over = true; game.phase = "over";
    for (const player of game.players) player.score = player.flags.reduce((sum, index) => sum + (game.cells[index].mine ? 2 : 0), 0) - (player.explosions || 0) * 3;
    const ranked = [...game.players].sort((a, b) => b.score - a.score || b.flags.filter(i => game.cells[i]?.mine).length - a.flags.filter(i => game.cells[i]?.mine).length || (a.explosions || 0) - (b.explosions || 0));
    const top = ranked.filter(player => player.score === ranked[0].score && player.flags.filter(i => game.cells[i]?.mine).length === ranked[0].flags.filter(i => game.cells[i]?.mine).length && (player.explosions || 0) === (ranked[0].explosions || 0));
    game.winnerId = top[Math.floor(Math.random() * top.length)].id;
    setStatus("Партия завершена. Результат — в итогах.", "found"); showWinner();
  }
  function summarize(event) {
    if (!event) return;
    if (game?.mode === "draw") { if (event.kind === "drawFinished") notify("Рисовальная игра завершена"); return; }
    if (event.kind === "finished") {
      setStatus("Партия завершена. Результат — в итогах.", "found"); showWinner();
    }
    else if (event.kind === "boom") setStatus(`${event.name} подорвался на мине: −3 очка.`, "hit");
    else if (event.kind === "started") setStatus(`Партия началась. Лимит — ${event.name} флажков каждому. Вход новых игроков закрыт.`);
    else if (event.kind === "joined") notify(`${event.name} сел за стол`);
  }
  function showWinner() {
    if (!game?.over || winnerDismissed) return;
    const winner = game.players.find(player => player.id === game.winnerId) || [...game.players].sort((a, b) => b.score - a.score || b.flags.filter(i => game.cells[i]?.mine).length - a.flags.filter(i => game.cells[i]?.mine).length || (a.explosions || 0) - (b.explosions || 0) || a.id.localeCompare(b.id))[0];
    const exact = game.players.filter(player => player.score === winner.score && player.flags.filter(i => game.cells[i]?.mine).length === winner.flags.filter(i => game.cells[i]?.mine).length && (player.explosions || 0) === (winner.explosions || 0)).length > 1;
    ui.winnerTitle.textContent = `Победитель — ${winner.name}!`;
    ui.winnerMessage.textContent = `${winner.score} очков. ${exact ? "Равенство решено жребием." : "Итог определён по очкам, точности флажков и числу подрывов."}`;
    ui.winnerOverlay.classList.remove("hidden");
  }
  function drawDrawingGame() {
    if (drawClockTimer) { clearInterval(drawClockTimer); drawClockTimer = 0; }
    ui.roomSetup.classList.add("hidden"); ui.dashboard.classList.add("hidden");
    ui.drawLobby.classList.toggle("hidden", game.phase !== "lobby");
    ui.drawDashboard.classList.toggle("hidden", game.phase === "lobby");
    ui.heading.textContent = game.phase === "lobby" ? "Комната рисования · ждём игроков" : game.phase === "over" ? "Итоги игры" : "Рисуй и угадывай";
    ui.copyLink.disabled = game.phase !== "lobby"; ui.copyLink.textContent = game.phase === "lobby" ? "Пригласить ↗" : "Набор закрыт";
    const playersOnline = game.players.filter(player => player.online !== false);
    if (game.phase === "lobby") {
      const isHost = game.hostId === myId;
      ui.drawHostSettings.classList.toggle("hidden", !isHost); ui.drawGuestWaiting.classList.toggle("hidden", isHost);
      $("start-drawing").disabled = playersOnline.length < 2;
      ui.drawLobbyError.textContent = playersOnline.length < 2 && isHost ? "Пригласи хотя бы одного игрока, чтобы начать." : "";
      ui.drawLobbyCount.textContent = `${playersOnline.length} / ${MAX_PLAYERS}`; ui.drawLobbyCode.textContent = roomId;
      ui.drawLobbyPlayers.replaceChildren();
      for (const player of game.players) {
        const row = document.createElement("li"), avatar = document.createElement("span"), details = document.createElement("span"), name = document.createElement("span"), role = document.createElement("span");
        row.className = "player-row"; avatar.className = "player-avatar"; avatar.textContent = (player.name || "?").slice(0, 1).toUpperCase(); avatar.style.color = player.color || PLAYER_COLORS[0]; details.className = "player-details"; name.className = "player-name"; name.textContent = player.name + (player.online === false ? " · вышел" : ""); role.className = "player-sub"; role.textContent = player.id === game.hostId ? "ведущий" : "готов играть"; details.append(name, role); row.append(avatar, details); ui.drawLobbyPlayers.append(row);
      }
      return;
    }
    const drawing = game.drawing;
    if (!drawing) return;
    const choosing = drawing.stage === "choosing", isDrawer = drawing.drawerId === myId;
    if (activeStroke && (activeStrokeRound !== drawing.round || !isDrawer || choosing || game.phase !== "playing")) activeStroke = null;
    $("draw-word-choice").classList.toggle("hidden", !choosing || !isDrawer || game.phase !== "playing");
    for (let index = 0; index < 2; index++) {
      const button = $("draw-choice-" + index);
      button.textContent = drawing.choices?.[index] || "…";
      button.disabled = !choosing || !isDrawer || !drawing.choices?.[index];
    }
    const drawer = game.players.find(player => player.id === drawing.drawerId);
    ui.drawRound.textContent = `РАУНД ${drawing.round} / ${drawing.roundsTotal}`;
    ui.drawWord.innerHTML = game.phase === "over" ? `Слово: <strong>${escapeMarkup(drawing.word || "—")}</strong>` : choosing ? (isDrawer ? "Выбери слово для рисунка" : "Художник выбирает слово…") : isDrawer ? `ТВОЁ СЛОВО: <strong>${escapeMarkup(drawing.word)}</strong>` : drawing.guessedPlayers.includes(myId) ? "Верно! Ждём остальных" : `Что это? <strong>${escapeMarkup(drawing.hint || "_ _ _")}</strong>`;
    ui.drawTurn.textContent = game.phase === "over" ? "ИГРА ОКОНЧЕНА" : drawing.drawerId === myId ? "ТЫ РИСУЕШЬ" : `${drawer?.name ?? "Игрок"} РИСУЕТ`;
    ui.drawTools.classList.toggle("hidden", !isDrawer || choosing || game.phase !== "playing");
    $("draw-hint").classList.toggle("hidden", solo);
    $("draw-hint-count").classList.toggle("hidden", solo);
    $("draw-hint").disabled = choosing || !isDrawer || game.phase !== "playing" || (drawing.hintCount || 0) >= (drawing.maxHints || 0);
    $("draw-hint-count").textContent = `Открыто букв: ${drawing.hintCount || 0} / ${drawing.maxHints || 0}`;
    const canGuess = game.phase === "playing" && !choosing && !isDrawer && !drawing.guessedPlayers.includes(myId);
    ui.drawGuess.disabled = !canGuess; ui.drawGuess.placeholder = canGuess ? "Напиши свою догадку…" : drawing.drawerId === myId ? "Ты рисуешь — остальные угадывают" : "Ты угадал!";
    ui.drawGuessForm.querySelector("button").disabled = !canGuess;
    ui.drawPlayerCount.textContent = `${playersOnline.length}`;
    ui.drawScores.replaceChildren();
    for (const player of [...game.players].sort((a, b) => b.score - a.score)) {
      const row = document.createElement("li"), avatar = document.createElement("span"), details = document.createElement("span"), name = document.createElement("span"), status = document.createElement("span"), score = document.createElement("span");
      row.className = "player-row"; avatar.className = "player-avatar"; avatar.textContent = (player.name || "?").slice(0, 1).toUpperCase(); avatar.style.color = player.color || PLAYER_COLORS[0]; details.className = "player-details"; name.className = "player-name"; name.textContent = player.name + (player.id === drawing.drawerId ? " · рисует" : player.online === false ? " · вышел" : ""); status.className = "player-sub"; status.textContent = drawing.guessedPlayers.includes(player.id) ? "угадал слово" : ""; score.className = "draw-score"; score.textContent = String(player.score); details.append(name, status); row.append(avatar, details, score); ui.drawScores.append(row);
    }
    ui.drawChat.replaceChildren();
    for (const line of game.chat || []) { const message = document.createElement("p"); message.className = line.kind === "system" ? "system-message" : ""; if (line.kind === "chat") { const label = document.createElement("b"); label.className = "chat-name"; label.textContent = `${line.name}: `; message.append(label, document.createTextNode(line.text)); } else message.textContent = line.text; ui.drawChat.append(message); }
    ui.drawChat.scrollTop = ui.drawChat.scrollHeight;
    renderDrawingCanvas(activeStroke); updateDrawClock();
    if (game.phase === "playing" && drawing.endsAt) drawClockTimer = setInterval(updateDrawClock, 500);
    $("phase-hint").textContent = game.phase === "over" ? "ВСЕ РАУНДЫ ЗАВЕРШЕНЫ · ИТОГИ СПРАВА" : "РИСУЙ ИЛИ УГАДЫВАЙ · КАЖДЫЙ ИГРОК РИСУЕТ ОДИН РАЗ";
  }
  function escapeMarkup(value) { return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char])); }
  function renderDrawingCanvas(extra = null) {
    const canvas = ui.drawCanvas, context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    const strokes = [...(game?.drawing?.strokes || []), ...(extra ? [extra] : [])];
    for (const stroke of strokes) {
      if (!stroke.points?.length) continue;
      context.save();
      context.globalCompositeOperation = stroke.tool === "eraser" ? "destination-out" : "source-over";
      context.globalAlpha = stroke.tool === "eraser" ? 1 : (stroke.opacity ?? 1);
      context.strokeStyle = stroke.color; context.lineWidth = Math.max(2, stroke.size * canvas.width); context.lineCap = "round"; context.lineJoin = "round";
      if (stroke.points.length === 1 || stroke.points.every(point => point.x === stroke.points[0].x && point.y === stroke.points[0].y)) {
        context.fillStyle = stroke.color; context.beginPath(); context.arc(stroke.points[0].x * canvas.width, stroke.points[0].y * canvas.height, context.lineWidth / 2, 0, Math.PI * 2); context.fill(); context.restore(); continue;
      }
      context.beginPath(); context.moveTo(stroke.points[0].x * canvas.width, stroke.points[0].y * canvas.height);
      if (stroke.tool === "line") { const last = stroke.points.at(-1); context.lineTo(last.x * canvas.width, last.y * canvas.height); }
      else for (let i = 1; i < stroke.points.length; i++) context.lineTo(stroke.points[i].x * canvas.width, stroke.points[i].y * canvas.height);
      context.stroke();
      context.restore();
    }
  }
  function updateDrawClock() {
    const drawing = game?.drawing;
    if (!drawing || !drawing.endsAt) { ui.drawClock.textContent = solo ? "ПРАКТИКА" : "—"; return; }
    const seconds = Math.max(0, Math.ceil((drawing.endsAt - Date.now()) / 1000));
    ui.drawClock.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    ui.drawClock.classList.toggle("time-low", seconds <= 10);
  }
  function draw() {
    if (!game) return;
    if (game.mode === "draw") { drawDrawingGame(); return; }
    ui.drawLobby.classList.add("hidden"); ui.drawDashboard.classList.add("hidden");
    if (game.phase === "lobby" || !game.config) {
      const isHost = game.hostId === myId;
      ui.roomSetup.classList.remove("hidden"); ui.dashboard.classList.add("hidden");
      ui.hostSettings.classList.toggle("hidden", !isHost); ui.guestWaiting.classList.toggle("hidden", isHost); ui.createBoard.classList.toggle("hidden", !isHost);
      ui.copyLink.disabled = false; ui.copyLink.textContent = "Пригласить ↗"; ui.heading.textContent = "Комната · ждём поле";
      ui.setupShareCode.textContent = roomId; ui.setupPlayerCount.textContent = `${game.players.filter(p => p.online !== false).length} / ${MAX_PLAYERS}`;
      refreshAutomaticFlagLimit();
      ui.setupPlayers.replaceChildren();
      for (const player of game.players) {
        const row = document.createElement("li"), avatar = document.createElement("span"), details = document.createElement("span"), name = document.createElement("span"), role = document.createElement("span");
        row.className = "player-row"; avatar.className = "player-avatar"; avatar.textContent = (player.name || "?").slice(0, 1).toUpperCase(); avatar.style.color = player.color || PLAYER_COLORS[0];
        details.className = "player-details"; name.className = "player-name"; name.textContent = player.name + (player.online === false ? " · вышел" : ""); role.className = "player-sub"; role.textContent = player.id === game.hostId ? "ведущий" : "ожидает старта";
        details.append(name, role); row.append(avatar, details); ui.setupPlayers.append(row);
      }
      return;
    }
    ui.roomSetup.classList.add("hidden"); ui.dashboard.classList.remove("hidden"); ui.heading.textContent = game.over ? "Итоги партии" : "Чьи флажки точнее?";
    const { width, height, mines, flags } = game.config;
    const safeCount = Math.max(0, game.cells.length - mines);
    ui.board.replaceChildren();
    ui.board.style.gridTemplateColumns = `repeat(${width}, minmax(21px, 34px))`;
    ui.board.style.gridTemplateRows = `repeat(${height}, minmax(21px, 34px))`;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < game.cells.length; i++) {
      const c = game.cells[i], button = document.createElement("button"); button.type = "button"; button.className = "cell"; button.setAttribute("role", "gridcell"); button.dataset.index = i;
      if (c.open || game.over) {
        button.classList.add("revealed");
        if (c.mine) { button.classList.add("mine"); if (c.boom) button.classList.add("exploded"); button.setAttribute("aria-label", c.boom ? `Мина взорвалась: ${c.by}` : "Мина"); }
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
      if (game.phase !== "playing" || (c.open && !personalFlags(myId).includes(i)) || game.over) button.disabled = true;
      button.addEventListener("click", () => { if (flagMode) sendAction("flag", i); else sendAction("open", i); });
      button.addEventListener("contextmenu", event => { event.preventDefault(); sendAction("flag", i); });
      fragment.appendChild(button);
    }
    ui.board.appendChild(fragment);
    ui.found.textContent = game.safe; ui.safeTotal.textContent = safeCount; ui.safe.textContent = Math.max(0, safeCount - game.safe); ui.mineCount.textContent = mines; ui.progress.style.width = `${100 * game.safe / safeCount}%`;
    const me = currentPlayer(); ui.score.textContent = game.over && me ? me.score : "—";
    const label = document.getElementById("score-label"); if (label) label.textContent = game.over ? "ТВОЙ ИТОГ" : "РЕЗУЛЬТАТ В КОНЦЕ";
    ui.flagsLeft.textContent = Math.max(0, flags - (me?.flags.length || 0)); ui.flagCap.textContent = flags;
    ui.playerCount.textContent = `${game.players.filter(p => p.online !== false).length} / ${MAX_PLAYERS}`;
    ui.settingsSummary.textContent = `${width} × ${height}  ·  ${mines} мин  ·  ${flags} флажков каждому`;
    ui.copyLink.disabled = game.phase !== "lobby";
    ui.copyLink.textContent = game.phase === "lobby" ? "Пригласить ↗" : "Набор закрыт";
    ui.phaseHint.textContent = game.phase === "lobby" ? "ИГРОКИ МОГУТ ВОЙТИ ПО ССЫЛКЕ, ПОКА КОМНАТА В ЛОББИ" : game.phase === "over" ? "МИНЫ ОТКРЫТЫ · РЕЗУЛЬТАТ ПАРТИИ ПОДСЧИТАН" : "ВХОД ЗАКРЫТ · ПАРТИЯ УЖЕ НАЧАЛАСЬ";
    ui.playerList.replaceChildren();
    for (const [rank, player] of game.players.toSorted((a, b) => b.score - a.score).entries()) {
      const row = document.createElement("li"), points = document.createElement("span"), avatar = document.createElement("span"), details = document.createElement("span"), name = document.createElement("span"), resources = document.createElement("span");
      const left = Math.max(0, flags - (player.flags?.length || 0));
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
      if (needed > 0 && needed === around.length) {
        foundTarget = around.find(i => !game.players.some(other => other.id !== bot.id && other.flags.includes(i))) ?? null;
        if (foundTarget != null) break;
      }
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
      if (bot.flags.length >= game.config.flags) bot.flags.shift();
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
  function startDrawingPractice() {
    if (!cleanName()) return;
    solo = true; myId = "local-practice"; roomId = "ПРАКТИКА";
    game = { mode: "draw", phase: "playing", over: false, hostId: myId, players: [{ id: myId, name: ui.name.value.trim(), score: 0, color: PLAYER_COLORS[0], online: true }], drawing: { round: 1, roundsTotal: 1, drawerId: myId, word: "Свободное рисование", hint: "", startedAt: Date.now(), endsAt: 0, strokes: [], guessedPlayers: [] }, chat: [] };
    showGame("draw"); draw();
  }
  $("create-room").addEventListener("click", () => enterRoom(makeRoomCode(), true));
  $("join-room").addEventListener("click", () => { const code = ui.roomInput.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, ""); if (code.length < 4 || code.length > 6) { showError("Код комнаты — от 4 до 6 букв или цифр."); return; } enterRoom(code, false); });
  $("solo-start").addEventListener("click", () => { if (selectedMode === "draw") { startDrawingPractice(); return; } if (!cleanName()) return; roomId = "ДУЭЛЬ"; const config = { ...PRESETS.medium, flags: PRESETS.medium.mines }; startView(roomId, "solo", config); game.players.push({ id: "forest-spirit", name: "Бот", score: 0, explosions: 0, color: PLAYER_COLORS[1], flags: [], online: true }); draw(); scheduleBot(900); });
  $("game-prev").addEventListener("click", changeGame); $("game-next").addEventListener("click", changeGame);
  for (const button of document.querySelectorAll("[data-preset]")) button.addEventListener("click", () => {
    const config = PRESETS[button.dataset.preset];
    flagLimitCustom = false; $("board-width").value = config.width; $("board-height").value = config.height; $("mine-total").value = config.mines; refreshAutomaticFlagLimit(true);
    document.querySelectorAll("[data-preset]").forEach(item => item.classList.toggle("selected", item === button)); showError(""); $("setup-error").textContent = "";
  });
  for (const id of ["board-width", "board-height", "mine-total"]) $(id).addEventListener("input", () => { document.querySelectorAll("[data-preset]").forEach(item => item.classList.remove("selected")); $("setup-error").textContent = ""; refreshAutomaticFlagLimit(); });
  $("flag-total").addEventListener("input", () => { flagLimitCustom = true; document.querySelectorAll("[data-preset]").forEach(item => item.classList.remove("selected")); $("setup-error").textContent = ""; });
  ui.createBoard.addEventListener("click", () => { const config = chosenSettings(true); if (socket && config && game?.phase === "lobby" && game.hostId === myId) socket.send(JSON.stringify({ type: "start", config })); });
  $("start-drawing").addEventListener("click", () => { ui.drawLobbyError.textContent = ""; if (socket?.readyState === WebSocket.OPEN && game?.phase === "lobby" && game.hostId === myId) socket.send(JSON.stringify({ type: "start" })); });
  ui.drawGuessForm.addEventListener("submit", event => { event.preventDefault(); const text = ui.drawGuess.value.trim(); if (!text || !game || game.mode !== "draw") return; if (solo) { ui.drawGuess.value = ""; return; } if (socket?.readyState === WebSocket.OPEN) sendDrawingAction("guess", { text }); ui.drawGuess.value = ""; });
  document.querySelectorAll(".draw-colors button").forEach(button => { button.style.setProperty("--draw-color", button.dataset.color); button.addEventListener("click", () => { drawingColor = button.dataset.color; document.querySelectorAll(".draw-colors button").forEach(item => item.classList.toggle("selected", item === button)); }); });
  function canPaint() { return game?.mode === "draw" && game.phase === "playing" && game.drawing?.drawerId === myId && game.drawing.stage !== "choosing"; }
  function sendDrawingAction(type, extra = {}) { if (socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type, round: game?.drawing?.round, ...extra })); }
  for (let index = 0; index < 2; index++) $("draw-choice-" + index).addEventListener("click", () => {
    if (game?.drawing?.stage !== "choosing" || game.drawing.drawerId !== myId) return;
    sendDrawingAction("chooseWord", { index });
  });
  $("draw-hint").addEventListener("click", () => { if (canPaint() && !solo) sendDrawingAction("hint"); });
  $("draw-opacity").addEventListener("input", () => { $("draw-opacity-value").textContent = `${$("draw-opacity").value}%`; });
  document.querySelectorAll("[data-draw-tool]").forEach(button => button.addEventListener("click", () => {
    drawingTool = button.dataset.drawTool;
    document.querySelectorAll("[data-draw-tool]").forEach(item => { item.classList.toggle("selected", item === button); item.setAttribute("aria-pressed", String(item === button)); });
    $("draw-opacity").disabled = drawingTool === "eraser";
    ui.drawCanvas.dataset.tool = drawingTool;
  }));
  $("draw-clear").addEventListener("click", () => { if (!canPaint()) return; activeStroke = null; if (solo) { game.drawing.strokes = []; renderDrawingCanvas(); } else sendDrawingAction("clear"); });
  function canvasPoint(event) { const rect = ui.drawCanvas.getBoundingClientRect(); return { x: Math.round(Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)) * 10000) / 10000, y: Math.round(Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)) * 10000) / 10000 }; }
  ui.drawCanvas.addEventListener("pointerdown", event => {
    if (!canPaint() || activeStroke || event.button !== 0 || !event.isPrimary) return;
    event.preventDefault(); ui.drawCanvas.setPointerCapture(event.pointerId); activePointerId = event.pointerId; activeStrokeRound = game.drawing.round;
    activeStroke = { tool: drawingTool, opacity: Number($("draw-opacity").value) / 100, color: drawingColor, size: Number($("draw-size").value) / ui.drawCanvas.width, points: [canvasPoint(event)] };
    renderDrawingCanvas(activeStroke);
  });
  function extendStroke(event, final = false) {
    if (!activeStroke || event.pointerId !== activePointerId) return;
    const point = canvasPoint(event), previous = activeStroke.points.at(-1);
    if (activeStroke.tool === "line") activeStroke.points = [activeStroke.points[0], point];
    else {
      if (!final && Math.hypot(point.x - previous.x, point.y - previous.y) < 0.002) return;
      if (activeStroke.points.length >= 100) activeStroke.points = activeStroke.points.filter((_, index) => index % 2 === 0);
      activeStroke.points.push(point);
    }
    renderDrawingCanvas(activeStroke);
  }
  ui.drawCanvas.addEventListener("pointermove", event => extendStroke(event));
  function finishStroke(event) {
    if (!activeStroke || event.pointerId !== activePointerId) return;
    if (!canPaint() || activeStrokeRound !== game.drawing.round) { activeStroke = null; renderDrawingCanvas(); return; }
    extendStroke(event, true);
    if (activeStroke.points.length === 1) activeStroke.points.push({ ...activeStroke.points[0] });
    if (solo) { game.drawing.strokes.push(activeStroke); renderDrawingCanvas(); }
    else sendDrawingAction("stroke", { stroke: activeStroke });
    activeStroke = null; activePointerId = null;
  }
  ui.drawCanvas.addEventListener("pointerup", finishStroke);
  ui.drawCanvas.addEventListener("pointercancel", () => { activeStroke = null; activePointerId = null; renderDrawingCanvas(); });
  ui.drawCanvas.addEventListener("contextmenu", event => event.preventDefault());
  $("winner-close").addEventListener("click", () => { winnerDismissed = true; ui.winnerOverlay.classList.add("hidden"); });
  ui.roomInput.addEventListener("input", () => { ui.roomInput.value = ui.roomInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6); });
  $("leave-room").addEventListener("click", () => teardown());
  $("copy-link").addEventListener("click", async () => { const link = `${location.origin}${location.pathname}?room=${encodeURIComponent(roomId)}&game=${selectedMode}`; try { await navigator.clipboard.writeText(link); notify("Ссылка на комнату скопирована"); } catch (_) { notify(`Код комнаты: ${roomId}`); } });
  ui.flagMode.addEventListener("click", () => { flagMode = !flagMode; ui.flagMode.setAttribute("aria-pressed", String(flagMode)); setStatus(flagMode ? "Режим флажка: коснись клетки, которую хочешь проверить." : "Режим проверки клетки."); });
  applySelectedMode(); document.querySelector(".draw-colors button[data-color='#17201c']")?.classList.add("selected");
  document.addEventListener("keydown", event => { if (event.key === "Escape" && game) teardown(); });
  window.addEventListener("beforeunload", () => { if (socket) socket.close(); });
  if (savedRoom) { ui.connection.textContent = "КОМНАТА ДРУЗЬЕЙ"; }
})();
