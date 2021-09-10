// 내 풀이
function solution(s) {
  return s.toLowerCase().split('').filter(v => v === 'p').length === s.toLowerCase().split('').filter(v => v === 'y').length;
}

// 다른 사람 풀이 1
function solution(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// 다른 사람 풀이 2
function solution(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}