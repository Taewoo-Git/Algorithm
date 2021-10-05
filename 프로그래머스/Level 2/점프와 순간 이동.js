// 내 풀이
function solution(n) {
  var ans = 0;
  while (n > 0) {
    if (n % 2 == 0) n /= 2;
    else {
      n -= 1;
      ans += 1;
    }
  }
  return ans;
}

// 다른 사람 풀이
function solution(n) {
  if (n === 1) return 1;
  const bin = Array.from(n.toString(2));
  return bin.reduce((a, b) => (+a) + (+b));
}