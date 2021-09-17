// 내 풀이 1 (시간 초과)
function solution(n) {
  let answer = 0, k = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      if (i * j - k === n) answer += 1;
    }
    k += 1;
  }
  return answer;
}

// 내 풀이 2
function solution(n) {
  let answer = [], last = 0, sum = 0, arr = [];
  while (sum < n) {
    arr.push(++last);
    sum += last;
  }
  while (arr[0] !== n) {
    if (sum <= n) {
      if (sum === n) answer.push(arr.slice());
      arr.push(++last);
      sum += last;
    } else sum -= arr.shift();
  }
  return answer.length + 1;
}

// 다른 사람 풀이
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}