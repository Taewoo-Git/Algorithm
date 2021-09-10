// 내 풀이
function solution(s) {
  return /^[0-9]{4}$/.test(s) || /^[0-9]{6}$/.test(s);
}

// 다른 사람 풀이
function solution(s) {
  return /^\d{6}$|^\d{4}$/.test(s);
}