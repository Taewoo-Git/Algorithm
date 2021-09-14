// 내 풀이
function solution(nums) {
  const getCombination = (arr, n) => { // 배열 조합 알고리즘
      const result = [];
      if (n === 1) return arr.map((v) => [v]);
      arr.forEach((val, idx) => {
          const fixed = val;
          const rest = arr.slice(idx + 1);
          const combination = getCombination(rest, n - 1);
          const attached = combination.map((v) => [fixed, ...v]);
          result.push(...attached);
      });
      return result;
  };
  const isPrime = (n) => { // 소수 판별 알고리즘
      if (n % 2 == 0) return (n == 2);
      const m = Math.sqrt(n);
      for (let i = 3; i <= m; i += 2) {
          if (n % i == 0) return false;
      }
      return true;
  };
  const temp = getCombination(nums, 3).map((val) => val.reduce((acc, cur) => acc + cur));
  return temp.filter((val) => isPrime(val)).length;
}