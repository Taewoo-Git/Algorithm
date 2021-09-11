// 내 풀이
const credit = (num) => {
  let ret = '';
  switch (true) {
    case num >= 90:
      ret = 'A';
      break;
    case num >= 80:
      ret = 'B';
      break;
    case num >= 70:
      ret = 'C';
      break;
    case num >= 50:
      ret = 'D';
      break;
    default:
      ret = 'F';
      break;
  }
  return ret;
}

function solution(scores) {
  const temp = Array.from({ length: scores.length }, (v, i) => []);
  scores.forEach((v, i) => v.forEach((val, idx) => temp[idx].push(val)));
  temp.forEach((v, i) => {
    const maxLength = v.filter((val) => val === Math.max(...v)).length
    if (maxLength === 1 && v[i] === Math.max(...v)) temp[i].splice(i, 1);

    const minLength = v.filter((val) => val === Math.min(...v)).length
    if (minLength === 1 && v[i] === Math.min(...v)) temp[i].splice(i, 1);
  });
  return temp.map((v) => v.reduce((acc, cur) => acc + cur) / v.length).map((v) => credit(v)).join('');
}

// 다른 사람 풀이
let solution = (scores) =>
  (scores[0].map((_, c) => scores.map(r => r[c])))
    .map((s, i) => [...s.splice(i, 1), s])
    .map(([m, s]) => Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s)
    .map(s => 'FDDCBAA'[Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)])
    .join('');