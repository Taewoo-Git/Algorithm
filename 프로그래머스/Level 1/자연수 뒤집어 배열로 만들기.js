// 내 풀이
function solution(n) {
  return (n + '').split('').map(v => + v).reverse();
}

// 다른 사람 풀이
function solution(n) {
  var arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}