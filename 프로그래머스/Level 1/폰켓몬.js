// 내 풀이
function solution(nums) {
  const temp = new Set([...nums]);
  return nums.length / 2 > temp.size ? temp.size : nums.length / 2;
}