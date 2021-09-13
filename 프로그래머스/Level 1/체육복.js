// 내 풀이
function solution(n, lost, reserve) {
  const students = Array(n).fill(1);
  lost.forEach((v) => --students[v - 1]);
  reserve.forEach((v) => ++students[v - 1]);
  students.forEach((val, idx) => {
    if (val > 1) {
      if (students[idx - 1] === 0) {
        --students[idx];
        ++students[idx - 1];
      } else if (students[idx + 1] === 0) {
        --students[idx];
        ++students[idx + 1];
      }
    }
  });
  return students.filter((v) => v).length;
}