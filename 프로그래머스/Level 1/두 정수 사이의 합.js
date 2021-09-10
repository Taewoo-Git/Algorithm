// 내 풀이
function solution(a, b) {
  return Array.from({ length: a > b ? a - b + 1 : b - a + 1 }, (v, i) => a > b ? b + i : a + i).reduce((sum, cur) => sum + cur);
}

// 다른 사람 풀이 (가우스 공식)
function solution(a, b) {
  return (a + b) * (Math.abs(b - a) + 1) / 2;
}