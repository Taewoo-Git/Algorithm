// 내 풀이
function solution(numbers) {
  const getPermutation = (arr, n) => { // 배열 순열 알고리즘
    const results = [];
    if (n === 1) return arr.map((v) => [v]);
    arr.forEach((val, idx) => {
      const fixed = val;
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)]
      const permutation = getPermutation(rest, n - 1);
      const attached = permutation.map((v) => [fixed, ...v]);
      results.push(...attached);
    });
    return results;
  };

  const isPrime = (num) => { // 소수 판별 알고리즘
    if (num == 1 || num % 2 == 0) return (num == 2);
    var m = Math.sqrt(num);
    for (var i = 3; i <= m; i += 2) {
      if (num % i == 0) return false;
    }
    return true;
  };

  const nums = new Set();
  for (let i = 0; i < numbers.length; i++) {
    const temp = getPermutation(numbers.split(''), numbers.length - i);
    temp.forEach((v) => nums.add(+v.join('')));
  }

  return [...nums].filter((v) => isPrime(v)).length;
}