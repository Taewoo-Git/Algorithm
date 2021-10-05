// 내 풀이
function solution(sizes) {
  sizes = sizes.map((v) => {
    if (v[1] > v[0]) {
      const temp = v[0];
      v[0] = v[1];
      v[1] = temp;
    }
    return v;
  });
  const w = Math.max(...sizes.map((v) => v[0]));
  const h = Math.max(...sizes.map((v) => v[1]));
  return w * h;
}

// 다른 사람 풀이
function solution(sizes) {
  const [w, h] = sizes.reduce(([w, h], [a, b]) => [Math.max(w, Math.max(a, b)), Math.max(h, Math.min(a, b))], [0, 0])
  return w * h;
}