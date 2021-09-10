// 내 풀이
function solution(n) {
  const isPrime = (num) => {
    if (num % 2 == 0) return (num == 2);
    var m = Math.sqrt(num);
    for (var i = 3; i <= m; i += 2) {
      if (num % i == 0) return false;
    }
    return true;
  };

  let result = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) ++result;
  }

  return result;
}

// 다른 사람 풀이
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}