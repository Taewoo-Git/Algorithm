// 내 풀이
function solution(s, n) {
  return s.split('').map((v) => /\s/.test(v) ? v : /[a-z]/.test(String.fromCharCode(v.toLowerCase().charCodeAt() + n)) ? String.fromCharCode(v.charCodeAt() + n) : String.fromCharCode(v.charCodeAt() - 26 + n)).join('');
}

// 다른 사람 풀이
function solution(s, n) {
  return s.replace(/[a-z]/ig, c => [c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1)][1]);
}