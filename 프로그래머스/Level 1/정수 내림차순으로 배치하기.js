// 내 풀이
function solution(n) {
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

// 다른 사람 풀이
function solution(n) {
  return + (n + '').split('').sort().reverse().join('');
}