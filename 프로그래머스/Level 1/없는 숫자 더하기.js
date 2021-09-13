// 내 풀이
function solution(numbers) {
  return Array.from({ length: 10 }, (_, i) => i)
    .filter((v) => !numbers.includes(v))
    .reduce((acc, cur) => acc + cur);
}