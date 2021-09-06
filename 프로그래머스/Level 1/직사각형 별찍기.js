// 내 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    const star = [];
    for (let j = 0; j < a; j++) {
      star.push('*');
    }
    const str = star.join('');
    console.log(str);
  }
});

// 다른 사람 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  const row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});