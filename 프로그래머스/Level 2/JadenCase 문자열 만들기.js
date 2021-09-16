// 내 풀이
function solution(s) {
  return s.toLowerCase().split(' ').map((v) => v.replace(/(^[a-z]{1})/, v.charAt(0).toUpperCase())).join(' ');
}

// 다른 사람 풀이
function solution(s) {
  return s.split(' ').map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(' ');
}