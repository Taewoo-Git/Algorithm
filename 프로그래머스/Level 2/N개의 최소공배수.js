// 내 풀이
function solution(arr) {
  const gcd = (a, b) => (a % b) === 0 ? b : gcd(b, a % b);
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}