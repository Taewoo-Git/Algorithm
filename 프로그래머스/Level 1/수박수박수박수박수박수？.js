// 내 풀이
function solution(n) {
  return Array.from({ length: n }, (v, i) => i % 2 ? '박' : '수').join('');
}