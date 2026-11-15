export function isFreehand(tool) {
  return tool === "pen" || tool === "eraser";
}

function pixel(point, width, height) {
  return [Math.min(width - 1, Math.floor(point.x * width)),
    Math.min(height - 1, Math.floor(point.y * height))];
}

function fillRegion(context, stroke, width, height) {
  const [x, y] = pixel(stroke.points[0], width, height);
  const image = context.getImageData(0, 0, width, height);
  const data = image.data;
  const first = y * width + x;
  const target = data.slice(first * 4, first * 4 + 4);
  const value = parseInt(stroke.color.slice(1), 16);
  const color = [value >> 16, (value >> 8) & 255, value & 255];
  const opacity = stroke.opacity ?? 1;
  if (target[3] === 255 && color.every((channel, i) => channel === target[i])) return;
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let end = 0;
  function enqueue(cell) {
    if (visited[cell]) return;
    visited[cell] = 1;
    const offset = cell * 4;
    // Transparent pixels can carry different RGB values after erasing.
    if (data[offset + 3] !== target[3] || (target[3] &&
      (data[offset] !== target[0] || data[offset + 1] !== target[1] || data[offset + 2] !== target[2]))) return;
    queue[end++] = cell;
  }
  enqueue(first);
  const remainder = target[3] / 255 * (1 - opacity);
  const outAlpha = opacity + remainder;
  const replacement = color.map((channel, i) => Math.round((channel * opacity + target[i] * remainder) / outAlpha));
  for (let head = 0; head < end; head++) {
    const cell = queue[head], offset = cell * 4, col = cell % width;
    data[offset] = replacement[0];
    data[offset + 1] = replacement[1];
    data[offset + 2] = replacement[2];
    data[offset + 3] = Math.round(outAlpha * 255);
    if (col > 0) enqueue(cell - 1);
    if (col + 1 < width) enqueue(cell + 1);
    if (cell >= width) enqueue(cell - width);
    if (cell + width < queue.length) enqueue(cell + width);
  }
  context.putImageData(image, 0, 0);
}

export function paintStroke(context, stroke) {
  if (!stroke.points?.length) return;
  const { width, height } = context.canvas;
  if (stroke.tool === "fill") {
    fillRegion(context, stroke, width, height);
    return;
  }
  const [first, last] = [stroke.points[0], stroke.points.at(-1)];
  const x = first.x * width, y = first.y * height;
  let dx = last.x * width - x, dy = last.y * height - y;
  context.save();
  context.globalCompositeOperation = stroke.tool === "eraser" ? "destination-out" : "source-over";
  context.globalAlpha = stroke.tool === "eraser" ? 1 : (stroke.opacity ?? 1);
  context.strokeStyle = context.fillStyle = stroke.color;
  context.lineWidth = Math.max(2, stroke.size * width);
  context.lineCap = context.lineJoin = "round";
  context.beginPath();
  if (stroke.tool === "square" || stroke.tool === "circle") {
    const edge = Math.min(Math.abs(dx), Math.abs(dy));
    dx = Math.sign(dx) * edge; dy = Math.sign(dy) * edge;
  }
  if (stroke.tool === "rect" || stroke.tool === "square") {
    context.rect(x, y, dx, dy);
    context.stroke();
  } else if (stroke.tool === "ellipse" || stroke.tool === "circle") {
    if (dx && dy) context.ellipse(x + dx / 2, y + dy / 2, Math.abs(dx / 2), Math.abs(dy / 2), 0, 0, Math.PI * 2);
    context.stroke();
  } else if (stroke.points.every(point => point.x === first.x && point.y === first.y)) {
    context.arc(x, y, context.lineWidth / 2, 0, Math.PI * 2);
    context.fill();
  } else {
    context.moveTo(x, y);
    for (const point of stroke.points.slice(1)) context.lineTo(point.x * width, point.y * height);
    context.stroke();
  }
  context.restore();
}

export function sampleColor(canvas, point, paper) {
  const [x, y] = pixel(point, canvas.width, canvas.height);
  const [red, green, blue, alpha] = canvas.getContext("2d").getImageData(x, y, 1, 1).data;
  if (!alpha) return paper;
  return "#" + [red, green, blue].map(channel => channel.toString(16).padStart(2, "0")).join("");
}
