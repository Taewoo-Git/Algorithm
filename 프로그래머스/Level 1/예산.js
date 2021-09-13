// 다른 사람 풀이 1
function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();
  return d.length;
}

// 다른 사람 풀이 2 (Bitwise NOT)
function solution(d, budget) {
  return ~(~d.sort((a, b) => a - b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}

// 다른 사람 풀이 3
function solution(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach((val) => {
    money += val;
    if (money <= budget) answer++;
  });
  return answer;
}