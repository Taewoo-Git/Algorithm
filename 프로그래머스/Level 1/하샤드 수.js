// 내 풀이
function solution(x) {
  const a = x.toString().split('').map(v => parseInt(v)).reduce((sum, val) => sum + val);
  return !Boolean(x % a);
}

// 다른 사람 풀이
function solution(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}