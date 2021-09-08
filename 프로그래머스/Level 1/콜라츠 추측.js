// 내 풀이
function solution(num) {
  let answer = 0;
  while (num !== 1 && answer !== 500) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    ++answer;
  }
  return answer === 500 ? -1 : answer;
}

// 다른 사람 풀이
function solution(num, count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}