export function calcDistance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt((dx * dx) + (dy * dy));
}

export function middle(p1, p2) {
  return (p1 + p2) / 2;
}

export function calcCenter(x1, y1, x2, y2) {
  return {
    x: middle(x1, x2),
    y: middle(y1, y2),
  };
}

export function isInCircle(x, y, cx, cy, r) {
  return calcDistance(x, y, cx, cy) < r;
}
