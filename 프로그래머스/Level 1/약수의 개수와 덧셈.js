// 내 풀이
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    const divisor = Array.from({ length: i + 1 }, (_, j) => j).filter((_, j) => i % j === 0);
    answer = divisor.length % 2 ? answer - i : answer + i;
  }
  return answer;
}

// 다른 사람 풀이
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) answer -= i; // 제곱 근이 정수이면 약수의 개수는 홀수
    else answer += i;
  }
  return answer;
}