// 내 풀이
function solution(answers) {
  const students = [[], [], []];
  const guess = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  answers.forEach((v, i) => {
    for (let j = 0; j < guess.length; j++) {
      students[j].push(v === guess[j][i % guess[j].length]);
    }
  });
  const correct = students.map((val) => val.filter((v) => v).length);
  return correct.map((v, i) => v === Math.max(...Object.values(correct)) ? i + 1 : 0).filter((v) => v);
}

// 다른 사람 풀이
function solution(answers) {
  var answer = [];

  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var c1 = answers.filter((v, i) => v === a1[i % a1.length]).length;
  var c2 = answers.filter((v, i) => v === a2[i % a2.length]).length;
  var c3 = answers.filter((v, i) => v === a3[i % a3.length]).length;

  var max = Math.max(c1, c2, c3);

  if (c1 === max) answer.push(1);
  if (c2 === max) answer.push(2);
  if (c3 === max) answer.push(3);

  return answer;
}