// 내 풀이
function solution(brown, yellow) {
  var answer = [];
  const sum = brown + yellow;
  for (let i = 1; i <= sum; i++) {
    if (sum % i === 0) answer.push([i, sum / i]);
  }
  answer = answer.filter((v) => v[0] >= v[1]).filter((v) => (v[0] - 2) * (v[1] - 2) === yellow);
  return answer[0];
}