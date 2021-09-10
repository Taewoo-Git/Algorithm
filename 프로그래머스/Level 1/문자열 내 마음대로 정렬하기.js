// 내 풀이
function solution(strings, n) {
  return strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}

// 다른 사람 풀이
function solution(strings, n) {
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}