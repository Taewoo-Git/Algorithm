// 다른 사람 풀이
function solution(arr1, arr2) {
  return arr1.map((row) => arr2[0].map((_, i) => row.reduce((acc, val, idx) => acc + val * arr2[idx][i], 0)));
}