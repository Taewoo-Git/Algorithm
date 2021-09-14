// 내 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]
  const min = lottos.filter((v) => win_nums.includes(v)).length;
  const max = lowest + lottos.filter((v) => !v).length;
  return [rank[max], rank[min]];
}