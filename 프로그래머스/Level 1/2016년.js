// 내 풀이
function solution(a, b) {
  return new Date(`2016-${a}-${b}`).toDateString().split(' ')[0].toUpperCase();
}

// 다른 사람 풀이
function solution(a, b) {
  return new Date(2016, (a - 1), b).toString().slice(0, 3).toUpperCase();
}