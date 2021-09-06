// 내 풀이
function solution(arr1, arr2) {
  return arr1.map((v, i) => v.map((s, j) => s + arr2[i][j]));
}

// 다른 사람 풀이
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}