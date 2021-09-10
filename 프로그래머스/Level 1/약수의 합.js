// 내 풀이
function solution(n) {
  return n ? Array.from({ length: n }, (v, i) => i + 1).filter((v) => n % v === 0).reduce((acc, cur) => acc + cur) : 0;
}

// 다른 사람 풀이
function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, b += n % a ? 0 : a);
}