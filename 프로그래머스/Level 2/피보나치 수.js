// 내 풀이
function solution(n) {
  let answer = 0;
  Array(n + 1).fill(null).forEach((_, i, arr) => {
    i < 2 ? arr[i] = i % 1234567 : arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
    if (i == n) answer = arr.pop();
  });
  return answer;
}