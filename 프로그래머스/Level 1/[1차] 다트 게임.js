// 내 풀이
function solution(dartResult) {
  const num = dartResult.split(/[A-Z]|\*|\#/).filter((v) => v);
  dartResult.split(/[0-9]/).filter((v) => v).map((v, i) => {
    const cal = v.split('');
    cal.forEach((val) => {
      switch (val) {
        case 'S':
          num[i] = Math.pow(num[i], 1);
          break;
        case 'D':
          num[i] = Math.pow(num[i], 2);
          break;
        case 'T':
          num[i] = Math.pow(num[i], 3);
          break;
        case '*':
          if (i !== 0) num[i - 1] *= 2;
          num[i] *= 2;
          break;
        case '#':
          num[i] *= -1;
          break;
      }
    });
  });
  return num.reduce((acc, cur) => acc + cur);
}

// 다른 사람 풀이
function solution(dartResult) {
  const bonus = { 'S': 1, 'D': 2, 'T': 3 },
    options = { '*': 2, '#': -1, undefined: 1 };
  let darts = dartResult.match(/\d.?\D/g);
  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];
    darts[i] = score;
  }
  return darts.reduce((a, b) => a + b);
}