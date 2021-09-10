// 내 풀이
function solution(s) {
  return s.split(' ').map((val) => val.split('').map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join('')).join(' ');
}

// 다른 사람 풀이
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) { return a[0].toUpperCase() + a[1].toLowerCase(); });
}