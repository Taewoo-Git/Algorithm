// 내 풀이
function solution(weights, head2head) {
  const players = [];
  head2head.forEach((val, idx) => {
    const player = {
      num: idx + 1,
      win: 0,
      lose: 0,
      heavy: 0,
      weight: weights[idx]
    };
    val.split('').forEach((v, i) => {
      if (v === 'W') {
        ++player.win;
        if (weights[i] > weights[idx]) ++player.heavy;
      }
      else if (v === 'L') ++player.lose;
    });
    players.push(player);
  });
  return players.sort((a, b) => b.weight - a.weight)
    .sort((a, b) => b.heavy - a.heavy)
    .sort((a, b) => (b.win / (b.win + b.lose)) - a.win / (a.win + a.lose))
    .map((v) => v.num);
}