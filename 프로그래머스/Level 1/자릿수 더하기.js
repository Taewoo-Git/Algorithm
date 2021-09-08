// 내 풀이
function solution(n) {
  return (n + '').split('').map(v => + v).reduce((sum, cur) => sum + cur);
}

// 다른 사람 풀이
function solution(n) {
  return (n + '').split('').reduce((acc, cur) => acc + parseInt(cur), 0)
}