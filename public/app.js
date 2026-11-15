import { TYPING_TEXTS } from "./typing-texts.js";
import { DRAW_WORDS } from "./draw-words.js";
import { FLEET, shipCells, canPlace } from "./sea-rules.js";

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
  const catalog = {
    sapper: { name: "Сапёр", icon: "🚩", hue: "#84b495" },
    draw: { name: "Рисуй и угадывай", icon: "🎨", hue: "#c39cf0" },
    sea: { name: "Морской бой", icon: "⚓", hue: "#8ad9e9" },
    typing: { name: "Кто быстрее напишет?", icon: "⌨", hue: "#ffc486" },
    four: { name: "Четыре в ряд", icon: "🟡", hue: "#ffbb77", description: "По очереди бросайте фишки в столбцы. Собери четыре своих фишки по горизонтали, вертикали или диагонали." },
    pairs: { name: "Найди пару", icon: "✦", hue: "#aeb1ff", description: "Переворачивай по две карточки. Найдёшь пару — получишь очко и ещё один ход. Выиграет тот, кто соберёт больше пар." },
    cards: { name: "21", icon: "🂡", hue: "#7cdbad", description: "Бери карты или остановись. Выигрывает тот, кто ближе к 21 без перебора. Туз считается за 1 или 11." }
  };
  const modes = Object.keys(catalog);
  const isTableMode = mode => mode === "four" || mode === "pairs" || mode === "cards";
  let selectedMode = modes.includes(savedMode) ? savedMode : "sapper";
  if (savedRoom) ui.roomInput.value = savedRoom.toUpperCase().slice(0, 6);

  let game = null, socket = null, solo = false, botTimer = 0, flagMode = false, flagLimitCustom = false, roomId = "", myId = "", myToken = "", toastTimer = 0, winnerDismissed = false, drawingColor = "#17201c", activeStroke = null, drawClockTimer = 0;
  function showError(message) { ui.error.textContent = message; }
  let drawingTool = "pen", activeStrokeRound = 0, activePointerId = null;
  function applySelectedMode() {
    const drawing = selectedMode === "draw";
    document.body.dataset.game = selectedMode;
    document.title = drawing ? "Рисуй и угадывай — Круг друзей" : "Сапёр — Круг друзей";
    $("game-index").textContent = `ИГРА ${modes.indexOf(selectedMode) + 1} / ${modes.length}`;
    $("landing-cap").textContent = selectedMode === "sea" ? "2 ИГРОКА" : "ДО 20 ИГРОКОВ";
    $("hero-eyebrow").textContent = drawing ? "СЛОВО ЗАДАНО. ТВОЯ ОЧЕРЕДЬ РИСОВАТЬ." : "ТИШЕ. СЛУШАЙ. СМОТРИ ПОД НОГИ.";
    $("hero-title").innerHTML = drawing ? "Рисуй и<br><em>угадывай</em>" : "<em>Сапёр</em>";
    $("hero-description").textContent = drawing ? "Рисуй загаданное слово, пока друзья угадывают. Очки получают самые быстрые догадчики." : "Каждый ставит свои цветные флажки на подозрительные клетки. Если открыть мину, она взорвётся; остальные мины останутся скрыты до конца партии.";
    $("hero-rules").innerHTML = drawing ? "<span><b>✎</b> рисуй по очереди</span><span><b>⌛</b> угадай за минуту</span><span><b>★</b> очки за скорость</span>" : "<span><b>↕</b> лимит флажков зависит от числа игроков</span><span><b>+2 / −3</b> находка / подрыв</span><span><b>🎨</b> свой цвет</span>";
    $("create-room-text").textContent = drawing ? "Создать комнату рисования" : "Создать комнату";
    $("solo-start").textContent = drawing ? "Попробовать одному →" : "Сыграть с ботом →";
    $("solo-start").classList.toggle("hidden", isTableMode(selectedMode));
    if (selectedMode === "sea") {
      document.title = "Морской бой — Круг друзей";
      $("hero-eyebrow").textContent = "ДУЭЛЬ НА ВОДЕ";
      $("hero-title").innerHTML = "Морской<br><em>бой</em>";
      $("hero-description").textContent = "Расставьте корабли и по очереди стреляйте по полю соперника. Побеждает тот, кто первым потопит весь флот.";
      $("hero-rules").innerHTML = "<span><b>10</b> кораблей</span><span><b>10×10</b> поле</span><span><b>↻</b> попадание даёт ещё ход</span>";
      $("create-room-text").textContent = "Создать комнату";
    }
    if (selectedMode === "typing") {
      $("solo-start").textContent = "Попробовать одному →";
      document.title = "Кто быстрее напишет — Круг друзей";
      $("hero-eyebrow").textContent = "ГОНКА ПЕЧАТИ";
      $("hero-title").innerHTML = "Кто быстрее<br><em>напишет?</em>";
      $("hero-description").textContent = "У всех одинаковый текст. Печатай быстро и точно, чтобы пройти в следующий раунд.";
      $("hero-rules").innerHTML = "<span>Русские тексты и скороговорки</span><span>Раунды на выбывание</span>";
    }
    if (isTableMode(selectedMode)) {
      const details = catalog[selectedMode];
      document.title = details.name + " — Круг друзей";
      $("hero-eyebrow").textContent = selectedMode === "cards" ? "КАРТОЧНЫЙ СТОЛ" : "ИГРА НА ДВОИХ";
      $("hero-title").textContent = details.name;
      $("hero-description").textContent = details.description;
      $("hero-rules").replaceChildren();
      $("landing-cap").textContent = selectedMode === "cards" ? "2–4 ИГРОКА" : "2 ИГРОКА";
    }
    for (const card of $("game-gallery").children) card.setAttribute("aria-pressed", String(card.dataset.mode === selectedMode));
  }
  let switchingGame = false;
  async function changeGame(direction) {
    if (switchingGame || $("create-room").disabled) return;
    switchingGame = true;
    const buttons = [$("game-prev"), $("game-next"), $("create-room"), $("join-room"), $("solo-start")];
    buttons.forEach(button => button.disabled = true);
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 200;
    ui.landing.style.setProperty("--slide-out", `${-direction * 45}px`);
    ui.landing.style.setProperty("--slide-in", `${direction * 45}px`);
    ui.landing.classList.add("game-switching");
    await new Promise(resolve => setTimeout(resolve, delay));
    selectedMode = modes[(modes.indexOf(selectedMode) + direction + modes.length) % modes.length];
    ui.roomInput.value = ""; showError(""); applySelectedMode();
    history.replaceState({}, "", `${location.pathname}?game=${selectedMode}`);
    ui.landing.classList.add("game-entering");
    ui.landing.classList.remove("game-switching");
    void ui.landing.offsetWidth;
    ui.landing.classList.remove("game-entering");
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
    seaDraft = FLEET.map(() => null); seaSelected = 0; seaVertical = false;
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
        selectedMode = modes.includes(message.mode) ? message.mode : "sapper";
        game = { mode: selectedMode, cells: message.cells, players: message.players, config: message.config, phase: message.phase, hostId: message.hostId, safe: message.safe, over: message.over, winnerId: message.winnerId || "", drawing: message.drawing, chat: message.chat || [] };
        game.sea = message.sea;
        game.table = message.table;
        game.typing = message.typing;
        roomId = message.room || roomId;
        if (message.token) { myToken = message.token; localStorage.setItem(`forest-mines-token:${roomId}`, myToken); }
        myId = message.me; ui.error.textContent = ""; showGame("online"); draw();
        if (message.event) summarize(message.event);
        else if (game.over && game.mode === "sapper") showWinner();
        if (game.phase === "lobby" && game.mode === "sapper") setStatus(game.hostId === myId ? "Комната открыта. Друзья могут присоединяться; выбери поле, когда будете готовы." : "Ты в лобби. Ждём, пока ведущий создаст поле.");
      }
    });
    socket.addEventListener("close", () => { if (game && !solo) { setStatus("Связь с комнатой прервалась. Проверь интернет и зайди ещё раз.", "hit"); notify("Соединение закрыто"); } });
    socket.addEventListener("error", () => { [$("create-room"), $("join-room")].forEach(b => b.disabled = false); showError("Не удалось соединиться с сервером комнаты."); });
  }
  function teardown(returnToMenu = true) {
    clearInterval(typingClock); clearTimeout(typingFlush);
    typingEdits = []; typingRound = 0;
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
    $("draw-practice-actions").classList.toggle("hidden", !solo);
    $("draw-hint").disabled = choosing || !isDrawer || game.phase !== "playing" || (drawing.hintCount || 0) >= (drawing.maxHints || 0);
    $("draw-hint-count").textContent = solo && drawing.hintCount ? `Подсказка: ${drawing.hint}` : `Открыто букв: ${drawing.hintCount || 0} / ${drawing.maxHints || 0}`;
    const canGuess = game.phase === "playing" && !choosing && !isDrawer && !drawing.guessedPlayers.includes(myId);
    ui.drawGuessForm.classList.toggle("hidden", solo && practiceRole === "draw");
    ui.drawGuess.disabled = !canGuess;
    ui.drawGuess.placeholder = canGuess ? "Напиши свою догадку…" : game.phase === "over" ? "Раунд завершён" : choosing ? "Художник выбирает слово" : isDrawer ? "Ты рисуешь — остальные угадывают" : "Ты угадал!";
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
    $("phase-hint").textContent = solo ? "ПРОБНЫЙ РАУНД · МОЖНО НАЧАТЬ ЗАНОВО" : game.phase === "over" ? "ВСЕ РАУНДЫ ЗАВЕРШЕНЫ · ИТОГИ СПРАВА" : "РИСУЙ ИЛИ УГАДЫВАЙ · КАЖДЫЙ ИГРОК РИСУЕТ ОДИН РАЗ";
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
    if (solo && seconds === 0 && game.phase === "playing") {
      if (drawing.stage === "choosing") selectPracticeWord(drawing.choices[Math.floor(Math.random() * 2)]);
      else finishPractice("Время вышло.");
      return;
    }
    ui.drawClock.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    ui.drawClock.classList.toggle("time-low", seconds <= 10);
  }
  let seaDraft = FLEET.map(() => null), seaSelected = 0, seaVertical = false;
  const seaColumns = "АБВГДЕЖЗИК";
  function seaGrid(id, states, action, placing = false) {
    const grid = $(id);
    const focused = grid.contains(document.activeElement) ? document.activeElement.dataset.cell : undefined;
    const fragment = document.createDocumentFragment();
    function axis(label) {
      const mark = document.createElement("span");
      mark.className = "sea-axis"; mark.textContent = label;
      mark.setAttribute("aria-hidden", "true"); fragment.append(mark);
    }
    axis("");
    for (const letter of seaColumns) axis(letter);
    for (let i = 0; i < 100; i++) {
      if (i % 10 === 0) axis(String(Math.floor(i / 10) + 1));
      const cell = document.createElement("button"), state = states.get(i);
      cell.type = "button";
      cell.dataset.cell = i;
      cell.className = "sea-cell" + (state ? " sea-" + state : "");
      const coordinate = seaColumns[i % 10] + (Math.floor(i / 10) + 1);
      const labels = { ship: "корабль", miss: "мимо", hit: "попадание", sunk: "потоплен" };
      cell.setAttribute("aria-label", state ? `${coordinate}, ${labels[state]}` : coordinate);
      cell.textContent = state === "miss" ? "·" : state === "hit" || state === "sunk" ? "×" : "";
      cell.disabled = !action || state === "miss" || state === "hit" || state === "sunk";
      if (!cell.disabled) cell.addEventListener("click", () => action(i));
      if (placing) bindSeaDrag(cell, i);
      fragment.append(cell);
    }
    grid.replaceChildren(fragment);
    if (focused !== undefined) grid.querySelector(`[data-cell="${focused}"]:enabled`)?.focus();
  }
  function drawSea() {
    for (const panel of [ui.roomSetup, ui.dashboard, ui.drawLobby, ui.drawDashboard]) panel.classList.add("hidden");
    const sea = game.sea, opponent = game.players.find(player => player.id !== myId);
    const ownFleet = sea?.ownFleet?.length ? sea.ownFleet : seaDraft.filter(Boolean);
    const ready = Boolean(sea?.ownFleet?.length);
    const placing = game.phase === "lobby" && !ready;
    const myTurn = game.phase === "playing" && sea?.turn === myId && opponent?.online && (solo || socket?.readyState === WebSocket.OPEN);
    ui.heading.textContent = "Морской бой";
    ui.copyLink.disabled = solo;
    ui.copyLink.textContent = "Пригласить ↗";
    ui.phaseHint.textContent = "КОРАБЛИ НЕ СОПРИКАСАЮТСЯ · ПОПАДАНИЕ ДАЁТ ЕЩЁ ХОД";
    $("sea-status").textContent = game.over ? "Партия завершена" : !opponent?.online ? "Ждём соперника. Можно расставить корабли заранее." :
      placing ? `Расставлено ${ownFleet.length}/10. ${ownFleet.length === 10 ? "Можно нажать «Готов»." : "Выбери корабль и место для него."}` :
      game.phase === "lobby" ? "Флот готов. Ждём расстановку соперника." : myTurn ? "Твой ход. Выбери клетку на поле соперника." : `Ходит ${opponent.name}.`;
    $("sea-result").textContent = game.over ? game.winnerId === myId ? "Ты победил!" : `Победил ${opponent?.name ?? "соперник"}.` : "";
    $("sea-restart").classList.toggle("hidden", !solo || !game.over);
    $("sea-controls").classList.toggle("hidden", !placing);
    $("sea-picker").classList.toggle("hidden", game.phase !== "lobby");
    if (game.phase === "lobby") renderSeaShips(placing, ownFleet);
    $("sea-target").classList.toggle("hidden", game.phase === "lobby");
    $("sea-ready").disabled = ownFleet.length !== FLEET.length || !opponent?.online;
    $("sea-undo").disabled = !seaDraft[seaSelected];
    $("sea-rotate").textContent = seaVertical ? "Вертикально ↻" : "Горизонтально ↻";
    const own = new Map(ownFleet.flat().map(cell => [cell, "ship"]));
    for (const cell of sea?.incoming ?? []) own.set(cell, own.has(cell) ? "hit" : "miss");
    for (const ship of ownFleet) if (ship.every(cell => own.get(cell) === "hit")) for (const cell of ship) own.set(cell, "sunk");
    const enemy = new Map((sea?.fired ?? []).map(({ cell, hit }) => [cell, hit ? "hit" : "miss"]));
    for (const cell of (sea?.sunk ?? []).flat()) enemy.set(cell, "sunk");
    seaGrid("sea-own", own, placing ? cell => {
      const occupied = seaDraft.findIndex(ship => ship?.includes(cell));
      if (occupied >= 0) { selectSeaShip(occupied); drawSea(); }
      else placeSeaShip(seaSelected, cell, seaVertical);
    } : null, placing);
    seaGrid("sea-enemy", enemy, myTurn ? cell => {
      if (solo) localSeaFire(cell, false);
      else socket.send(JSON.stringify({ type: "seaFire", cell }));
    } : null);
  }
  function selectSeaShip(index) {
    seaSelected = index;
    const ship = seaDraft[index];
    if (ship) seaVertical = ship[1] - ship[0] === 10;
  }
  function placeSeaShip(index, start, vertical) {
    if (game?.mode !== "sea" || game.phase !== "lobby" || game.sea?.ownFleet?.length || !FLEET[index]) return;
    const cells = shipCells(start, FLEET[index], vertical);
    if (!canPlace(cells, seaDraft.filter((ship, i) => ship && i !== index))) {
      notify("Корабль не помещается или касается другого."); return;
    }
    seaDraft[index] = cells;
    seaSelected = index;
    seaVertical = vertical;
    drawSea();
  }
  function enableSeaDrag(element, index, offset, vertical) {
    element.draggable = true;
    element.addEventListener("dragstart", event => {
      event.dataTransfer.setData("application/x-sea-ship", JSON.stringify({ index, offset, vertical }));
      event.dataTransfer.effectAllowed = "move";
    });
  }
  function bindSeaDrag(cell, position) {
    const index = seaDraft.findIndex(ship => ship?.includes(position));
    if (index >= 0) {
      const ship = seaDraft[index];
      enableSeaDrag(cell, index, ship.indexOf(position), ship[1] - ship[0] === 10);
      if (index === seaSelected) cell.classList.add("sea-selected");
    }
    cell.addEventListener("dragover", event => {
      if (event.dataTransfer.types.includes("application/x-sea-ship")) event.preventDefault();
    });
    cell.addEventListener("drop", event => {
      event.preventDefault();
      const raw = event.dataTransfer.getData("application/x-sea-ship");
      if (!raw) return;
      let ship;
      try { ship = JSON.parse(raw); } catch { return; }
      if (!Number.isInteger(ship?.index) || !Number.isInteger(ship.offset)) return;
      if (!ship.vertical && position % 10 < ship.offset) return;
      placeSeaShip(ship.index, position - ship.offset * (ship.vertical ? 10 : 1), ship.vertical);
    });
  }
  function renderSeaShips(placing, ownFleet) {
    const list = $("sea-ships");
    list.replaceChildren();
    for (const [index, length] of FLEET.entries()) {
      const button = document.createElement("button");
      button.type = "button"; button.className = "button sea-ship-card";
      button.disabled = !placing;
      const ship = placing ? seaDraft[index] : ownFleet[index];
      button.classList.toggle("sea-placed", Boolean(ship));
      button.setAttribute("aria-pressed", String(index === seaSelected));
      button.setAttribute("aria-label", "Корабль " + (index + 1) + ", клеток: " + length + (ship ? ", расставлен" : ""));
      for (let i = 0; i < length; i++) button.append(document.createElement("span"));
      if (placing) enableSeaDrag(button, index, 0, ship ? ship[1] - ship[0] === 10 : index === seaSelected && seaVertical);
      button.addEventListener("click", () => { selectSeaShip(index); drawSea(); $("sea-ships").children[index]?.focus(); });
      list.append(button);
    }
  }
  $("sea-rotate").addEventListener("click", () => {
    const ship = seaDraft[seaSelected];
    if (ship?.length > 1) placeSeaShip(seaSelected, ship[0], !seaVertical);
    else { seaVertical = !seaVertical; drawSea(); }
  });
  $("sea-undo").addEventListener("click", () => { seaDraft[seaSelected] = null; drawSea(); });
  function randomFleet() {
    let fleet = [];
    while (fleet.length !== FLEET.length) {
      fleet = [];
      for (const length of FLEET) {
        const options = Array.from({ length: 200 }, (_, index) => shipCells(index % 100, length, index >= 100))
          .filter(cells => canPlace(cells, fleet));
        if (!options.length) break;
        fleet.push(options[Math.floor(Math.random() * options.length)]);
      }
    }
    return fleet;
  }
  $("sea-random").addEventListener("click", () => { seaDraft = randomFleet(); drawSea(); });
  const seaBotId = "sea-bot";
  let seaBotFleet = [];
  function startSeaPractice() {
    clearTimeout(botTimer);
    solo = true; myId = "local-sea"; roomId = "БОТ";
    seaDraft = FLEET.map(() => null); seaSelected = 0; seaVertical = false; seaBotFleet = randomFleet();
    game = { mode: "sea", phase: "lobby", over: false, players: [
      { id: myId, name: ui.name.value.trim() || "Ты", online: true },
      { id: seaBotId, name: "Бот", online: true }
    ] };
    showGame("solo"); draw();
  }
  function localSeaFire(cell, bot) {
    const sea = game?.sea;
    if (game?.mode !== "sea" || !solo || game.over || sea?.turn !== (bot ? seaBotId : myId)) return;
    const target = bot ? sea.ownFleet : seaBotFleet;
    const shots = bot ? sea.incoming : sea.fired.map(shot => shot.cell);
    if (shots.includes(cell)) return;
    const hit = target.some(ship => ship.includes(cell));
    shots.push(cell);
    const sunk = target.filter(ship => ship.every(position => shots.includes(position)));
    if (!bot) { sea.fired.push({ cell, hit }); sea.sunk = sunk; }
    if (sunk.length === FLEET.length) {
      game.over = true; game.phase = "over"; game.winnerId = bot ? seaBotId : myId;
    } else if (!hit) sea.turn = bot ? myId : seaBotId;
    drawSea();
    if (!game.over && sea.turn === seaBotId) botTimer = setTimeout(seaBotMove, 480);
  }
  function seaBotMove() {
    if (!solo || game?.mode !== "sea" || game.over) return;
    const { ownFleet, incoming } = game.sea;
    const afloat = ownFleet.filter(ship => ship.some(cell => !incoming.includes(cell))).flat();
    const adjacent = cell => incoming.some(shot => afloat.includes(shot) &&
      Math.abs(cell % 10 - shot % 10) + Math.abs(Math.floor(cell / 10) - Math.floor(shot / 10)) === 1);
    const available = Array.from({ length: 100 }, (_, cell) => cell).filter(cell => !incoming.includes(cell));
    const nearby = available.filter(adjacent);
    const choices = nearby.length ? nearby : available;
    localSeaFire(choices[Math.floor(Math.random() * choices.length)], true);
  }
  $("sea-restart").addEventListener("click", startSeaPractice);
  $("sea-ready").addEventListener("click", () => {
    if (solo && game?.mode === "sea" && game.phase === "lobby" && seaDraft.every(Boolean)) {
      game.sea = { ownFleet: seaDraft, incoming: [], fired: [], sunk: [], turn: myId };
      game.phase = "playing"; drawSea(); return;
    }
    if (seaDraft.every(Boolean) && socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type: "seaReady", fleet: seaDraft }));
  });

  function draw() {
    if (!game) return;
    $("table-dashboard").classList.toggle("hidden", !isTableMode(game.mode));
    $("sea-dashboard").classList.toggle("hidden", game.mode !== "sea");
    $("typing-dashboard").classList.toggle("hidden", game.mode !== "typing");
    if (isTableMode(game.mode)) { drawTable(); return; }
    if (game.mode === "typing") { drawTyping(); return; }
    if (game.mode === "sea") { drawSea(); return; }
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
  let typingClock = 0, typingFlush = 0, typingRound = 0, typingEdits = [];
  const typingInput = $("typing-input");
  let practiceTypingText = "", practiceAttempts = 0, practiceErrors = 0;
  function startTypingPractice() {
    const choices = TYPING_TEXTS.filter(text => text !== practiceTypingText);
    practiceTypingText = choices[Math.floor(Math.random() * choices.length)];
    practiceAttempts = 0; practiceErrors = 0;
    solo = true; myId = "local-typing"; roomId = "ПРАКТИКА";
    typingRound = 0;
    const startsAt = Date.now() + 3000;
    game = {
      mode: "typing", phase: "playing", over: false,
      players: [{ id: myId, name: ui.name.value.trim() || "Ты", online: true }],
      typing: { text: practiceTypingText, startsAt, endsAt: startsAt + 120000, round: 1, value: "",
        results: [{ id: myId, correct: 0, speed: 0, accuracy: 0, finished: false }] }
    };
    showGame("solo");
    ui.connection.textContent = "ОДИНОЧНАЯ ПРАКТИКА";
    draw();
  }
  function updateTypingPractice(value) {
    const race = game.typing;
    const old = race.value;
    let start = 0, suffix = 0;
    while (start < Math.min(old.length, value.length) && old[start] === value[start]) start++;
    while (suffix < Math.min(old.length, value.length) - start &&
           old[old.length - 1 - suffix] === value[value.length - 1 - suffix]) suffix++;
    for (let i = start; i < value.length - suffix; i++) {
      practiceAttempts++;
      if (value[i] !== race.text[i]) practiceErrors++;
    }
    race.value = value;
    const correct = [...value].filter((character, index) => character === race.text[index]).length;
    const seconds = Math.max(1, (Math.min(Date.now(), race.endsAt) - race.startsAt) / 1000);
    const finished = value === race.text;
    race.results[0] = { id: myId, correct, speed: correct * 60 / seconds,
      accuracy: practiceAttempts ? 1 - practiceErrors / practiceAttempts : 0, finished };
    game.over = finished || Date.now() >= race.endsAt;
    if (game.over) game.phase = "over";
    drawTyping();
  }
  $("typing-restart").addEventListener("click", startTypingPractice);
  function flushTyping() {
    clearTimeout(typingFlush); typingFlush = 0;
    if (typingEdits.length && game?.mode === "typing" && socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: "typingInput", round: typingRound, edits: typingEdits }));
    }
    typingEdits = [];
  }
  function refreshTyping() {
    const race = game?.typing;
    if (!race || game.mode !== "typing") return;
    const me = race.results.find(result => result.id === myId);
    const countdown = Math.ceil((race.startsAt - Date.now()) / 1000);
    const left = Math.max(0, Math.ceil((race.endsAt - Date.now()) / 1000));
    if (solo && !game.over && left === 0) { updateTypingPractice(typingInput.value); return; }
    const canType = Boolean(me && !me.finished && countdown <= 0 && left && !game.over);
    const wasDisabled = typingInput.disabled;
    typingInput.disabled = !canType;
    if (canType && wasDisabled) typingInput.focus();
    $("typing-track").classList.toggle("hidden", countdown > 0 && !game.over);
    const status = $("typing-status");
    if (game.over) {
      const winner = game.players.find(player => player.id === game.winnerId);
      status.textContent = solo ? (me.finished ? "Текст набран. Твой результат ниже." : "Время вышло. Твой результат ниже.") :
        winner ? `Победитель — ${winner.name}!` : "Гонка завершена без победителя.";
    } else if (countdown > 0) {
      const names = race.previous?.eliminated.map(id => game.players.find(player => player.id === id)?.name).filter(Boolean);
      status.textContent = `${names?.length ? "Выбыли: " + names.join(", ") + ". " : ""}Раунд ${race.round} через ${countdown} сек.`;
    } else status.textContent = `Раунд ${race.round} · ${left} сек. · ${!me ? "Ты наблюдаешь" : me.finished ? "Текст набран. Ждём остальных" : "Печатай"}`;
    const fragment = document.createDocumentFragment();
    [...race.text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      const typed = typingInput.value[index];
      if (typed !== undefined) span.className = typed === char ? "typing-correct" : "typing-error";
      else if (index === typingInput.value.length && canType) span.className = "typing-current";
      fragment.append(span);
    });
    $("typing-prompt").replaceChildren(fragment);
  }
  function drawTyping() {
    for (const panel of [ui.roomSetup, ui.dashboard, ui.drawLobby, ui.drawDashboard]) panel.classList.add("hidden");
    ui.heading.textContent = "Кто быстрее напишет?";
    ui.copyLink.disabled = game.phase !== "lobby"; ui.copyLink.textContent = "Пригласить ↗";
    $("typing-restart").classList.toggle("hidden", !solo);
    ui.phaseHint.textContent = "РЕЗУЛЬТАТ УЧИТЫВАЕТ СКОРОСТЬ И ТОЧНОСТЬ";
    const race = game.typing, start = $("typing-start");
    const online = game.players.filter(player => player.online);
    start.classList.toggle("hidden", game.phase !== "lobby" || game.hostId !== myId);
    start.disabled = online.length < 2;
    clearInterval(typingClock);
    const results = $("typing-results");
    results.replaceChildren();
    $("typing-previous").classList.toggle("hidden", !race?.previous);
    const previous = $("typing-previous-results");
    previous.replaceChildren();
    for (const entry of race?.previous?.ranked ?? []) {
      const row = document.createElement("li");
      const name = game.players.find(player => player.id === entry.id)?.name ?? "Игрок";
      row.textContent = `${name} · ${Math.round(entry.speed)} зн./мин · ${Math.round(entry.accuracy * 100)}% точности · ${race.previous.eliminated.includes(entry.id) ? "выбыл" : "прошёл дальше"}`;
      previous.append(row);
    }
    if (!race) {
      $("typing-track").classList.add("hidden");
      $("typing-status").textContent = online.length < 2 ? "Пригласи хотя бы одного игрока." : "Ведущий может начать гонку.";
      for (const player of online) { const row = document.createElement("li"); row.textContent = player.name; results.append(row); }
      return;
    }
    if (race.round !== typingRound) {
      typingRound = race.round; typingEdits = []; clearTimeout(typingFlush); typingFlush = 0;
      typingInput.value = race.value;
      typingInput.maxLength = race.text.length;
    }
    for (const entry of race.results) {
      const row = document.createElement("li");
      const name = game.players.find(player => player.id === entry.id)?.name ?? "Игрок";
      row.textContent = `${name} · ${entry.correct}/${race.text.length} · ${Math.round(entry.speed)} зн./мин · ${Math.round(entry.accuracy * 100)}% точности`;
      results.append(row);
    }
    refreshTyping();
    if (!game.over) typingClock = setInterval(refreshTyping, 250);
  }
  $("typing-start").addEventListener("click", () => {
    if (socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type: "typingStart" }));
  });
  for (const event of ["paste", "drop"]) typingInput.addEventListener(event, e => e.preventDefault());
  typingInput.addEventListener("input", () => {
    if (typingInput.disabled || game?.mode !== "typing") return;
    if (solo) { updateTypingPractice(typingInput.value); return; }
    typingEdits.push(typingInput.value);
    if (typingEdits.length >= 24 || typingInput.value === game.typing.text) flushTyping();
    else if (!typingFlush) typingFlush = setTimeout(flushTyping, 160);
    refreshTyping();
  });
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
  const practiceSketches = [
    { word: "дом", paths: [[[.29,.49],[.5,.19],[.71,.49],[.29,.49]],[[.33,.49],[.33,.82],[.67,.82],[.67,.49]],[[.46,.82],[.46,.63],[.55,.63],[.55,.82]]] },
    { word: "гриб", paths: [[[.24,.54],[.28,.39],[.37,.26],[.5,.22],[.63,.26],[.72,.39],[.76,.54],[.24,.54]],[[.44,.54],[.42,.79],[.58,.79],[.56,.54]]] },
    { word: "зонт", paths: [[[.22,.52],[.26,.4],[.37,.27],[.5,.23],[.63,.27],[.74,.4],[.78,.52],[.22,.52]],[[.5,.19],[.5,.77],[.47,.83],[.42,.83],[.39,.78]]] }
  ];
  let practiceRole = "draw", practiceSketchIndex = -1;
  const practiceDeckKey = "drawing-practice-remaining-v1";
  const practiceDictionary = new Set(DRAW_WORDS);
  let practiceDeck = [];
  try {
    const saved = JSON.parse(localStorage.getItem(practiceDeckKey) || "[]");
    if (Array.isArray(saved)) practiceDeck = [...new Set(saved)].filter(word => practiceDictionary.has(word));
  } catch {}

  function takePracticeChoices() {
    if (practiceDeck.length < 2) {
      practiceDeck = [...DRAW_WORDS];
      for (let i = practiceDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [practiceDeck[i], practiceDeck[j]] = [practiceDeck[j], practiceDeck[i]];
      }
    }
    const choices = practiceDeck.splice(0, 2);
    try { localStorage.setItem(practiceDeckKey, JSON.stringify(practiceDeck)); } catch {}
    return choices;
  }

  function startDrawingPractice(role = "draw") {
    solo = true; myId = "local-practice"; roomId = "ПРАКТИКА";
    practiceRole = role; activeStroke = null; ui.drawGuess.value = "";
    const choices = role === "draw" ? takePracticeChoices() : [];
    game = {
      mode: "draw", phase: "playing", over: false, hostId: myId,
      players: [{ id: myId, name: ui.name.value.trim() || "Ты", score: 0, color: PLAYER_COLORS[0], online: true }],
      drawing: { round: 1, roundsTotal: 1, drawerId: myId, stage: "choosing", choices, word: "", hint: "", hintCount: 0, maxHints: 0, endsAt: Date.now() + 15000, strokes: [], guessedPlayers: [] },
      chat: []
    };
    if (role === "guess") {
      practiceSketchIndex = (practiceSketchIndex + 1) % practiceSketches.length;
      const sketch = practiceSketches[practiceSketchIndex];
      game.players.push({ id: "practice-artist", name: "Пример", score: 0, color: PLAYER_COLORS[1], online: true });
      game.drawing.drawerId = "practice-artist";
      game.drawing.strokes = sketch.paths.map(path => ({
        tool: "pen", color: "#362544", size: .009, points: path.map(([x, y]) => ({ x, y }))
      }));
      selectPracticeWord(sketch.word);
    }
    showGame("draw"); draw();
  }
  function selectPracticeWord(word) {
    Object.assign(game.drawing, {
      word, choices: [], stage: "drawing", endsAt: Date.now() + 60000,
      hint: [...word].map(() => "_").join(" "), maxHints: Math.floor(word.length / 2)
    });
    draw();
  }
  function finishPractice(message) {
    game.phase = "over"; game.over = true; game.drawing.endsAt = 0; activeStroke = null;
    game.chat.push({ kind: "system", text: message }); draw();
  }
  $("practice-draw").addEventListener("click", () => startDrawingPractice("draw"));
  $("practice-guess").addEventListener("click", () => startDrawingPractice("guess"));
  $("practice-restart").addEventListener("click", () => startDrawingPractice(practiceRole));
  $("create-room").addEventListener("click", () => enterRoom(makeRoomCode(), true));
  $("join-room").addEventListener("click", () => { const code = ui.roomInput.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, ""); if (code.length < 4 || code.length > 6) { showError("Код комнаты — от 4 до 6 букв или цифр."); return; } enterRoom(code, false); });
  $("solo-start").addEventListener("click", () => { if (selectedMode === "typing") { startTypingPractice(); return; } if (selectedMode === "sea") { startSeaPractice(); return; } if (selectedMode === "draw") { startDrawingPractice(); return; } if (!cleanName()) return; roomId = "ДУЭЛЬ"; const config = { ...PRESETS.medium, flags: PRESETS.medium.mines }; startView(roomId, "solo", config); game.players.push({ id: "forest-spirit", name: "Бот", score: 0, explosions: 0, color: PLAYER_COLORS[1], flags: [], online: true }); draw(); scheduleBot(900); });
  $("game-prev").addEventListener("click", () => changeGame(-1));
  $("game-next").addEventListener("click", () => changeGame(1));
  for (const button of document.querySelectorAll("[data-preset]")) button.addEventListener("click", () => {
    const config = PRESETS[button.dataset.preset];
    flagLimitCustom = false; $("board-width").value = config.width; $("board-height").value = config.height; $("mine-total").value = config.mines; refreshAutomaticFlagLimit(true);
    document.querySelectorAll("[data-preset]").forEach(item => item.classList.toggle("selected", item === button)); showError(""); $("setup-error").textContent = "";
  });
  for (const id of ["board-width", "board-height", "mine-total"]) $(id).addEventListener("input", () => { document.querySelectorAll("[data-preset]").forEach(item => item.classList.remove("selected")); $("setup-error").textContent = ""; refreshAutomaticFlagLimit(); });
  $("flag-total").addEventListener("input", () => { flagLimitCustom = true; document.querySelectorAll("[data-preset]").forEach(item => item.classList.remove("selected")); $("setup-error").textContent = ""; });
  ui.createBoard.addEventListener("click", () => { const config = chosenSettings(true); if (socket && config && game?.phase === "lobby" && game.hostId === myId) socket.send(JSON.stringify({ type: "start", config })); });
  $("start-drawing").addEventListener("click", () => { ui.drawLobbyError.textContent = ""; if (socket?.readyState === WebSocket.OPEN && game?.phase === "lobby" && game.hostId === myId) socket.send(JSON.stringify({ type: "start" })); });
  ui.drawGuessForm.addEventListener("submit", event => {
    event.preventDefault();
    const text = ui.drawGuess.value.trim();
    if (!text || ui.drawGuess.disabled || game?.mode !== "draw") return;
    ui.drawGuess.value = "";
    if (!solo) { sendDrawingAction("guess", { text }); return; }
    if (text.toLocaleLowerCase("ru") === game.drawing.word) finishPractice("Угадал!");
    else { game.chat.push({ kind: "chat", name: "Ты", text }); draw(); }
  });
  document.querySelectorAll(".draw-colors button").forEach(button => { button.style.setProperty("--draw-color", button.dataset.color); button.addEventListener("click", () => { drawingColor = button.dataset.color; document.querySelectorAll(".draw-colors button").forEach(item => item.classList.toggle("selected", item === button)); }); });
  function canPaint() { return game?.mode === "draw" && game.phase === "playing" && game.drawing?.drawerId === myId && game.drawing.stage !== "choosing"; }
  function sendDrawingAction(type, extra = {}) { if (socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type, round: game?.drawing?.round, ...extra })); }
  for (let index = 0; index < 2; index++) $("draw-choice-" + index).addEventListener("click", () => {
    if (game?.drawing?.stage !== "choosing" || game.drawing.drawerId !== myId) return;
    if (solo) selectPracticeWord(game.drawing.choices[index]);
    else sendDrawingAction("chooseWord", { index });
  });
  $("draw-hint").addEventListener("click", () => {
    if (!canPaint()) return;
    if (!solo) { sendDrawingAction("hint"); return; }
    const drawing = game.drawing;
    if (drawing.hintCount >= drawing.maxHints) return;
    drawing.hintCount++;
    drawing.hint = [...drawing.word].map((letter, index) => index < drawing.hintCount ? letter : "_").join(" ");
    draw();
  });
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
    if (activeStroke.tool === "line") activeStroke.points = [activeStroke.points[0], canvasPoint(event)];
    else {
      const samples = final ? [event] : event.getCoalescedEvents?.();
      for (const sample of samples?.length ? samples : [event]) {
        const next = canvasPoint(sample), last = activeStroke.points.at(-1);
        if (next.x !== last.x || next.y !== last.y) activeStroke.points.push(next);
      }
    }
    renderDrawingCanvas(activeStroke);
  }
  ui.drawCanvas.addEventListener("pointermove", event => extendStroke(event));
  // Keep the bends that deviate most from the straight segments already retained.
  function pointsForNetwork(points, limit = 100) {
    if (points.length <= limit) return points;
    function segment(first, last) {
      const a = points[first], b = points[last];
      const dx = b.x - a.x, dy = b.y - a.y, length = dx * dx + dy * dy;
      let error = 0, split = first;
      for (let i = first + 1; i < last; i++) {
        const x = points[i].x - a.x, y = points[i].y - a.y;
        const t = length ? Math.max(0, Math.min(1, (x * dx + y * dy) / length)) : 0;
        const distance = (x - t * dx) ** 2 + (y - t * dy) ** 2;
        if (distance > error) { error = distance; split = i; }
      }
      return { first, last, error, split };
    }
    const kept = [0, points.length - 1], pending = [segment(0, points.length - 1)];
    while (kept.length < limit) {
      pending.sort((a, b) => a.error - b.error);
      const next = pending.pop();
      if (!next?.error) break;
      kept.push(next.split);
      pending.push(segment(next.first, next.split), segment(next.split, next.last));
    }
    return kept.sort((a, b) => a - b).map(index => points[index]);
  }
  function finishStroke(event) {
    if (!activeStroke || event.pointerId !== activePointerId) return;
    if (!canPaint() || activeStrokeRound !== game.drawing.round) { activeStroke = null; renderDrawingCanvas(); return; }
    extendStroke(event, true);
    if (activeStroke.points.length === 1) activeStroke.points.push({ ...activeStroke.points[0] });
    if (solo) { game.drawing.strokes.push(activeStroke); renderDrawingCanvas(); }
    else sendDrawingAction("stroke", { stroke: { ...activeStroke, points: pointsForNetwork(activeStroke.points) } });
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
  const cardFaces = ["☀️", "🌙", "⭐", "🍒", "🍀", "💎", "🦋", "🍄"];
  function sendTable(type, index) {
    if (socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify({ type, index }));
  }
  function drawTable() {
    for (const panel of [ui.roomSetup, ui.dashboard, ui.drawLobby, ui.drawDashboard]) panel.classList.add("hidden");
    const state = game.table, pairs = game.mode === "pairs", cards = game.mode === "cards";
    const online = game.players.filter(player => player.online);
    const canMove = game.phase === "playing" && state?.turn === myId && online.length === game.players.length;
    const board = $("table-board"), start = $("table-start");
    const winner = game.players.find(player => player.id === game.winnerId);
    ui.heading.textContent = catalog[game.mode].name;
    ui.copyLink.disabled = game.phase !== "lobby";
    ui.copyLink.textContent = "Пригласить ↗";
    ui.phaseHint.textContent = cards ? "ЦЕЛЬ — 21 БЕЗ ПЕРЕБОРА" : pairs ? "СОБЕРИ БОЛЬШЕ ПАР" : "СОБЕРИ ЧЕТЫРЕ ФИШКИ В РЯД";
    start.classList.toggle("hidden", game.phase !== "lobby" || game.hostId !== myId);
    start.disabled = online.length < 2;
    $("table-status").textContent = game.over ? winner ? "Победитель — " + winner.name + "!" : "Ничья!" :
      online.length < 2 || (state && online.length < game.players.length) ? "Ждём игроков." : !state ? "Ведущий может начать игру." :
      canMove ? pairs && state.cards.filter((value, i) => value !== null && !state.found[i]).length === 1 ?
        "Открой вторую карточку." : "Твой ход." : "Ход соперника.";
    const scores = $("table-scores");
    scores.replaceChildren();
    game.players.forEach((player, index) => {
      const label = document.createElement("span");
      label.className = index === 0 ? "table-player-a" : "table-player-b";
      label.textContent = player.name + (pairs && state ? " · " + state.found.filter(id => id === player.id).length / 2 : "") + (cards && state ? " · " + (game.over ? state.totals[player.id] + " очк." : state.counts[player.id] + " карт" + (state.stood.includes(player.id) ? " · закончил" : "")) : "");
      scores.append(label);
    });
    $("table-draw-card").classList.toggle("hidden", !cards || !canMove);
    $("table-stand").classList.toggle("hidden", !cards || !canMove);
    $("table-card-status").textContent = cards && state ? "Твои очки: " + state.totals[myId] + (state.totals[myId] > 21 ? " · перебор" : "") : "";
    board.replaceChildren();
    if (cards) {
      board.className = "table-board twenty-one-hand";
      for (const value of state?.hand ?? []) {
        const card = document.createElement("span");
        const rank = ["Т", "2", "3", "4", "5", "6", "7", "8", "9", "10", "В", "Д", "К"][value % 13];
        const suit = Math.floor(value / 13);
        card.className = suit % 2 ? "playing-card red" : "playing-card";
        card.textContent = rank + " " + ["♠", "♥", "♣", "♦"][suit];
        board.append(card);
      }
      return;
    }
    board.className = "table-board " + (pairs ? "table-pairs" : "table-four");
    board.classList.toggle("table-won", game.over && Boolean(winner));
    if (!state) return;
    const values = pairs ? state.cards : state.board;
    values.forEach((value, index) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "table-cell";
      cell.disabled = !canMove || (pairs ? Boolean(state.found[index]) : Boolean(state.board[index % 7]));
      if (pairs) {
        cell.textContent = value === null ? "✦" : cardFaces[value];
        cell.classList.toggle("table-face", value !== null);
        cell.classList.toggle("table-found", Boolean(state.found[index]));
        cell.setAttribute("aria-label", "Карточка " + (index + 1) + (value === null ? ", закрыта" : ", " + cardFaces[value]));
      } else {
        cell.classList.toggle("table-player-a", Boolean(value) && value === game.players[0]?.id);
        cell.classList.toggle("table-player-b", Boolean(value) && value !== game.players[0]?.id);
        cell.classList.toggle("table-line", state.line.includes(index));
        cell.setAttribute("aria-label", "Столбец " + (index % 7 + 1) + (value ? ", фишка" : ""));
      }
      cell.classList.toggle("table-latest", state.latest === index);
      cell.addEventListener("click", () => sendTable("tableMove", pairs ? index : index % 7));
      board.append(cell);
    });
  }
  $("table-stand").addEventListener("click", () => sendTable("tableStand"));
  $("table-draw-card").addEventListener("click", () => sendTable("tableDraw"));
  $("table-start").addEventListener("click", () => sendTable("tableStart"));
  for (const [mode, item] of Object.entries(catalog)) {
    const card = document.createElement("button"), icon = document.createElement("span");
    card.type = "button"; card.className = "gallery-card"; card.dataset.mode = mode;
    card.style.setProperty("--tile", item.hue);
    icon.className = "gallery-icon"; icon.textContent = item.icon; icon.setAttribute("aria-hidden", "true");
    card.append(icon, document.createTextNode(item.name));
    card.addEventListener("click", () => {
      if (mode !== selectedMode) changeGame(modes.indexOf(mode) - modes.indexOf(selectedMode));
    });
    $("game-gallery").append(card);
  }
  applySelectedMode(); document.querySelector(".draw-colors button[data-color='#17201c']")?.classList.add("selected");
  document.addEventListener("keydown", event => { if (event.key === "Escape" && game) teardown(); });
  window.addEventListener("beforeunload", () => { if (socket) socket.close(); });
  if (savedRoom) { ui.connection.textContent = "КОМНАТА ДРУЗЬЕЙ"; }
})();
