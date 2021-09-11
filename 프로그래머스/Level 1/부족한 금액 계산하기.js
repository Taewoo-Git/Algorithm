// 내 풀이
function solution(price, money, count) {
  const result = Array.from({ length: count }, (v, i) => price * (i + 1)).reduce((acc, cur) => acc + cur) - money;
  return result > 0 ? result : 0;
}

// 다른 사람 풀이 (가우스 공식)
function solution(price, money, count) {
  const result = price * count * (count + 1) / 2 - money;
  return result > 0 ? result : 0;
}