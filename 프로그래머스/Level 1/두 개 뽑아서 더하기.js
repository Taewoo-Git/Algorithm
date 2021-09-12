// 내 풀이
function solution(numbers) {
  const answer = new Set();
  numbers.forEach((val, idx) => numbers.filter((_, i) => idx !== i).forEach((v) => answer.add(val + v)));
  return [...answer].sort((a, b) => a - b);
}