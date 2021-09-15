// 내 풀이
function solution(board, moves) {
  let answer = 0;
  const temp = Array.from({ length: board.length }, (_, i) => board.map((v) => v[i]).filter((v) => v));
  const bucket = [];
  moves.forEach((v) => {
    if (temp[v - 1][0]) {
      if (bucket[bucket.length - 1] === temp[v - 1][0]) {
        answer += 2;
        bucket.pop();
        temp[v - 1].shift();
      } else bucket.push(temp[v - 1].shift());
    }
  });
  return answer;
}