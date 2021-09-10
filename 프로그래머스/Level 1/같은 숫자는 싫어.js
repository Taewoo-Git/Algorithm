// 내 풀이
function solution(arr) {
  return arr.filter((v, i) => i === 0 ? true : arr[i - 1] !== v);
}

// 다른 사람 풀이
function solution(arr) {
  return arr.filter((v, i) => v != arr[i + 1]);
}