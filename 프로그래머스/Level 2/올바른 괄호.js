// 내 풀이 1 (시간 초과)
function solution(s) {
  while (s.includes('()')) {
    s = s.split('()').join('');
  }
  return !Boolean(s);
}

// 내 풀이 2 (시간 초과)
function solution(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    str += s[i];
    str = str.replace('()', '');
  }
  return !Boolean(str);
}

// 다른 사람 풀이
function solution(s) {
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    s.charAt(i) == '(' ? temp += 1 : temp -= 1;
    if (temp < 0) return false;
  }
  return !temp;
}