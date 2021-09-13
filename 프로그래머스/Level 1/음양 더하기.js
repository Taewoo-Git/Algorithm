// 내 풀이
function solution(absolutes, signs) {
  return absolutes.map((v, i) => signs[i] ? v : -v).reduce((acc, cur) => acc + cur);
}

// 다른 사람 풀이
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, idx) => acc + (val * (signs[idx] ? 1 : -1)), 0);
}