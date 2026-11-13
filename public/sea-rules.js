export const FLEET = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

export function shipCells(start, length, vertical) {
  if (!Number.isInteger(start) || start < 0 || start >= 100) return [];
  const offset = vertical ? Math.floor(start / 10) : start % 10;
  if (offset + length > 10) return [];
  return Array.from({ length }, (_, index) => start + index * (vertical ? 10 : 1));
}

export function canPlace(cells, fleet) {
  return cells.length > 0 && cells.every(cell => fleet.every(ship =>
    ship.every(other => Math.abs(cell % 10 - other % 10) > 1 ||
      Math.abs(Math.floor(cell / 10) - Math.floor(other / 10)) > 1)));
}

export function validFleet(fleet) {
  if (!Array.isArray(fleet) || fleet.length !== FLEET.length) return false;
  const placed = [];
  for (const [index, ship] of fleet.entries()) {
    if (!Array.isArray(ship) || ship.length !== FLEET[index]) return false;
    const cells = shipCells(ship[0], ship.length, ship[1] - ship[0] === 10);
    if (cells.length !== ship.length || !cells.every((cell, i) => cell === ship[i]) ||
        !canPlace(cells, placed)) return false;
    placed.push(cells);
  }
  return true;
}
