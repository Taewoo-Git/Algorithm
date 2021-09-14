// 내 풀이
function solution(a, b) {
  return Array(a.length).fill(0).map((_, i) => a[i] * b[i]).reduce((acc, cur) => acc + cur);
}

// 다른 사람 풀이
function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc += cur * b[idx], 0);
}