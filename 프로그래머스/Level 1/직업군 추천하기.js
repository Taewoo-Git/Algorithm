// 내 풀이
function solution(table, languages, preference) {
  const job = {};
  const score = {};
  table.forEach((v) => v.split(' ').forEach((val, idx) => {
    if (idx == 0) job[val] = {};
    if (languages.indexOf(val) > -1) job[v.split(' ')[0]][val] = 6 - idx;
  }));
  Object.keys(job).forEach((val) => score[val] = languages.map((v, i) => job[val][v] * preference[i] || 0).reduce((acc, cur) => acc + cur));
  const answer = Object.entries(score).sort().sort((a, b) => b[1] - a[1]);
  return answer[0][0];
}