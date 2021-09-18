// 내 풀이
function solution(n) {
  const getCount = (num) => num.toString(2).split('').filter((v) => v == 1).length;
  const origin = getCount(n++);
  while (getCount(n) !== origin) {
    ++n;
  }
  return n;
}

// 다른 사람 풀이
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n, a + 1);
}