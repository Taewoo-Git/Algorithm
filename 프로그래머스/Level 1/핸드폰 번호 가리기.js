// 내 풀이
function solution(phone_number) {
  return Array(phone_number.length - 4).fill('*').concat(phone_number.slice(-4)).join('');
}

// 다른 사람 풀이 1
function solution(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 다른 사람 풀이 2
function solution(s) {
  return "*".repeat(s.length - 4) + s.slice(-4);
}