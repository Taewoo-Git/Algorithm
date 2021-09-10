// 내 풀이
function solution(arr, divisor) {
  var answer = arr.filter(v => !(v % divisor));
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}