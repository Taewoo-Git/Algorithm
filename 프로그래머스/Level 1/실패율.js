// 내 풀이
function solution(N, stages) {
  const temp = Array.from({ length: N }, (_, i) => i + 1)
    .map((v) => {
      const failure = stages.filter((val) => val === v).length;
      const challenge = stages.filter((val) => val >= v).length;
      return failure / challenge;
    })
    .map((v, i) => new Object({ stage: i + 1, rate: v }));
  return temp.sort((a, b) => b.rate - a.rate).map((v) => v.stage);
}