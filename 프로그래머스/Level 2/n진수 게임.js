// 내 풀이
function solution(n, t, m, p) {
  let answer = '';
  let idx = 0, num = 0;
  while (answer.length < t) {
    const str = num.toString(n).toUpperCase();
    str.split('').forEach((v) => {
      if (answer.length === t) return;
      ++idx;
      if (idx === p) {
        answer += v;
        p += m;
      }
    });
    ++num;
  }
  return answer;
}

// 다른 사람 풀이
function solution(n, t, m, p) {
  var tube = Array.apply(null, Array(t)).map((_, i) => i * m + p - 1);
  var line = '';
  var max = m * t + p;
  for (var i = 0; line.length <= max; i++) {
    line += i.toString(n);
  }
  return tube.map((v) => line[v]).join('').toUpperCase();
}