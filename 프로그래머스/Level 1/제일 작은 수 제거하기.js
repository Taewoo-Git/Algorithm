// 내 풀이
function solution(arr) {
  return arr.length === 1 ? [-1] : arr.filter((v) => v !== Math.min(...arr));
}

// 다른 사람 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}