// 내 풀이 (참고, https://onlydev.tistory.com/71)
function solution(land) {
  land.forEach((v, i, arr) => {
    if (i === 0) return;
    v.forEach((_, j) => v[j] += Math.max(...arr[i - 1].filter((_, k) => j !== k)));
  });
  return Math.max(...land[land.length - 1]);
}

// 다른 사람 풀이
function solution(land) {
  return Math.max(...land.reduce((pre, cur) => {
    return [
      cur[0] + Math.max(pre[1], pre[2], pre[3]),
      cur[1] + Math.max(pre[0], pre[2], pre[3]),
      cur[2] + Math.max(pre[0], pre[1], pre[3]),
      cur[3] + Math.max(pre[0], pre[1], pre[2]),
    ];
  }, [0, 0, 0, 0]));
}