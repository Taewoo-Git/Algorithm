// 내 풀이
function solution(s) {
  return s.length % 2 ? s[parseInt(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2];
}

// 다른 사람 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}