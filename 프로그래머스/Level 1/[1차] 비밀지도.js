// 내 풀이
function solution(n, arr1, arr2) {
  const answer = [];
  const row = Array(n).fill(' ');
  arr1 = arr1.map((v, i) => {
    (v | arr2[i]).toString(2).split('').forEach((val) => {
      row.push(val === '1' ? '#' : ' ');
      row.shift();
    });
    answer.push(row.join(''));
    row.fill(' ');
  });
  return answer;
}

// 다른 사람 풀이 1
function solution(n, arr1, arr2) {
  const setZero = (n, s) => '0'.repeat(n - s.length) + s;
  return arr1.map((v, i) => setZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

// 다른 사람 풀이 2
var solution = (n, arr1, arr2) => arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'));