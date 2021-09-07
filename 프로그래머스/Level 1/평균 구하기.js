// 내 풀이
function solution(arr) {
  return arr.reduce((s, v) => s + v) / arr.length;
}

// 다른 사람 풀이
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}