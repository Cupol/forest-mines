const HUMAN = "local-table";
const BOT = "table-bot";
const COLUMN_ORDER = [3, 2, 4, 1, 5, 0, 6];

function shuffled(count, value = index => index) {
  const items = Array.from({ length: count }, (_, index) => value(index));
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function total(hand) {
  const low = hand.reduce((sum, card) => sum + Math.min(card % 13 + 1, 10), 0);
  return low + (low <= 11 && hand.some(card => card % 13 === 0) ? 10 : 0);
}

function winningLine(board, cell) {
  const x = cell % 7, y = Math.floor(cell / 7);
  for (const [dx, dy] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
    const line = [cell];
    for (const sign of [-1, 1]) {
      for (let n = 1; n < 4; n++) {
        const cx = x + dx * n * sign, cy = y + dy * n * sign;
        if (cx < 0 || cx >= 7 || cy < 0 || cy >= 6 || board[cy * 7 + cx] !== board[cell]) break;
        line.push(cy * 7 + cx);
      }
    }
    if (line.length >= 4) return line;
  }
  return [];
}

const scoringLines = [];
for (let y = 0; y < 6; y++) for (let x = 0; x < 7; x++) {
  for (const [dx, dy] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
    const endX = x + 3 * dx, endY = y + 3 * dy;
    if (endX >= 0 && endX < 7 && endY >= 0 && endY < 6) {
      scoringLines.push(Array.from({ length: 4 }, (_, i) => (y + i * dy) * 7 + x + i * dx));
    }
  }
}
function strongestColumn(board, landingCell) {
  const positions = Array.from({ length: 7 }, (_, column) => landingCell(column));
  const weights = [0, 2, 12, 42];
  const win = 100000;
  function evaluate(id, opponent) {
    let score = 0;
    for (let i = 3; i < board.length; i += 7) {
      if (board[i]) score += board[i] === id ? 5 : -5;
    }
    for (const line of scoringLines) {
      let own = 0, other = 0, available = false;
      for (const cell of line) {
        if (board[cell] === id) own++;
        else if (board[cell] === opponent) other++;
        else if (positions[cell % 7] === cell) available = true;
      }
      if (!other) score += weights[own] + (own === 3 && available ? 90 : 0);
      if (!own) score -= weights[other] + (other === 3 && available ? 90 : 0);
    }
    return score;
  }
  function search(id, opponent, depth, alpha, beta) {
    if (positions.every(cell => cell < 0)) return 0;
    if (!depth) return evaluate(id, opponent);
    let best = -Infinity;
    for (const column of COLUMN_ORDER) {
      const cell = positions[column];
      if (cell < 0) continue;
      board[cell] = id;
      positions[column] -= 7;
      const score = winningLine(board, cell).length ? win + depth :
        -search(opponent, id, depth - 1, -beta, -alpha);
      board[cell] = "";
      positions[column] = cell;
      best = Math.max(best, score);
      alpha = Math.max(alpha, score);
      if (alpha >= beta) break;
    }
    return best;
  }
  let choice, best = -Infinity;
  for (const column of COLUMN_ORDER) {
    const cell = positions[column];
    if (cell < 0) continue;
    board[cell] = BOT;
    positions[column] -= 7;
    const score = winningLine(board, cell).length ? win + 7 : -search(HUMAN, BOT, 6, -Infinity, -best);
    board[cell] = "";
    positions[column] = cell;
    if (score > best) { best = score; choice = column; }
    if (best > win) break;
  }
  return choice;
}

export function createTablePractice(mode, name, difficulty = "normal") {
  const deck = mode === "pairs" ? shuffled(16, index => index % 8) : [];
  const pile = mode === "cards" ? shuffled(52) : [];
  const hands = mode === "cards" ? { [HUMAN]: pile.splice(0, 2), [BOT]: pile.splice(0, 2) } : {};
  const seen = new Map();
  const open = [];
  const table = { board: mode === "four" ? Array(42).fill("") : [], cards: deck.map(() => null),
    found: deck.map(() => ""), turn: HUMAN, latest: -1, line: [], hand: hands[HUMAN], totals: {}, counts: {}, stood: [] };
  const game = { mode, phase: "playing", over: false, winnerId: "", table, players: [
    { id: HUMAN, name: name || "Ты", online: true },
    { id: BOT, name: mode === "four" && difficulty === "hard" ? "Бот · сложный" : "Бот", online: true }
  ] };
  function finish(winnerId = "") {
    Object.assign(game, { phase: "over", over: true, winnerId });
    table.turn = "";
  }
  function refresh() {
    table.cards = deck.map((face, cell) => table.found[cell] || open.includes(cell) ? face : null);
    for (const [id, hand] of Object.entries(hands)) {
      table.counts[id] = hand.length;
      if (id === HUMAN || game.over) table.totals[id] = total(hand);
    }
  }
  function landingCell(column) {
    for (let row = 5; row >= 0; row--) if (!table.board[row * 7 + column]) return row * 7 + column;
    return -1;
  }
  function play(id, action, index) {
    if (game.over || table.turn !== id) return false;
    const other = id === HUMAN ? BOT : HUMAN;
    if (mode === "four") {
      if (action !== "tableMove" || !Number.isInteger(index) || index < 0 || index > 6) return false;
      const cell = landingCell(index);
      if (cell < 0) return false;
      table.board[cell] = id; table.latest = cell;
      table.line = winningLine(table.board, cell);
      if (table.line.length) finish(id);
      else if (table.board.every(Boolean)) finish();
      else table.turn = other;
    } else if (mode === "pairs") {
      if (action !== "tableMove" || !Number.isInteger(index) || index < 0 || index >= deck.length || table.found[index]) return false;
      if (open.length === 2) open.length = 0;
      if (open.includes(index)) return false;
      open.push(index); seen.set(index, deck[index]); table.latest = index;
      if (open.length === 2) {
        const [a, b] = open;
        if (deck[a] === deck[b]) {
          table.found[a] = table.found[b] = id;
          open.length = 0;
          if (table.found.every(Boolean)) {
            const count = table.found.filter(owner => owner === id).length;
            finish(count === 8 ? "" : count > 8 ? id : other);
          }
        } else table.turn = other;
      }
    } else {
      if (action === "tableDraw" && pile.length) hands[id].push(pile.pop());
      else if (action !== "tableStand") return false;
      if (action === "tableStand" || total(hands[id]) >= 21 || !pile.length) {
        table.stood.push(id);
        if (table.stood.length === 2) {
          const score = hand => total(hand) > 21 ? 0 : total(hand);
          const delta = score(hands[HUMAN]) - score(hands[BOT]);
          finish(delta === 0 ? "" : delta > 0 ? HUMAN : BOT);
        } else table.turn = other;
      }
    }
    refresh();
    return true;
  }
  function botMove() {
    if (mode === "cards") return play(BOT, total(hands[BOT]) >= 17 ? "tableStand" : "tableDraw");
    if (mode === "four") {
      if (game.over || table.turn !== BOT) return false;
      if (difficulty === "hard") return play(BOT, "tableMove", strongestColumn(table.board, landingCell));
      const columns = COLUMN_ORDER.filter(column => landingCell(column) >= 0);
      function threat(id) {
        return columns.find(column => {
          const cell = landingCell(column), board = [...table.board];
          board[cell] = id;
          return winningLine(board, cell).length;
        });
      }
      return play(BOT, "tableMove", threat(BOT) ?? threat(HUMAN) ?? columns[Math.floor(Math.random() * Math.min(3, columns.length))]);
    }
    const first = open.length === 1 ? open[0] : -1;
    const cells = deck.map((_, index) => index).filter(index => !table.found[index] && index !== first);
    const known = first >= 0
      ? cells.find(index => seen.get(index) === seen.get(first))
      : cells.find(index => seen.has(index) && cells.some(other => other !== index && seen.get(other) === seen.get(index)));
    const unknown = cells.filter(index => !seen.has(index));
    const choices = unknown.length ? unknown : cells;
    return play(BOT, "tableMove", known ?? choices[Math.floor(Math.random() * choices.length)]);
  }
  refresh();
  return { game, humanId: HUMAN, botId: BOT, play, botMove };
}
