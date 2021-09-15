// 내 풀이
function solution(numbers, hand) {
  let answer = '';
  const keypad = [[1, 4, 7, '*'], [2, 5, 8, 0], [3, 6, 9, '#']]
  const dist = (mid, finger) => {
    const mid_idx = keypad[1].indexOf(mid) + 1;
    let finger_idx = keypad[0].indexOf(finger) + 1 || keypad[2].indexOf(finger) + 1;
    let temp = Math.abs((finger_idx || keypad[1].indexOf(finger) + 1) - mid_idx);
    temp += finger_idx ? 1 : 0;
    return temp;
  }
  let left = '*', right = '#';
  numbers.forEach((v) => {
    if (keypad[0].includes(v)) {
      left = v;
      answer += 'L';
    } else if (keypad[2].includes(v)) {
      right = v;
      answer += 'R';
    } else {
      const l = dist(v, left), r = dist(v, right);
      if (l === r) {
        hand === 'left' ? left = v : right = v;
        answer += hand === 'left' ? 'L' : 'R';
      } else {
        l < r ? left = v : right = v;
        answer += l < r ? 'L' : 'R';
      }
    }
  });
  return answer;
}

// 다른 사람 풀이
function solution(numbers, hand) {
  hand = hand[0] === 'r' ? 'R' : 'L';
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = { L: [1, 1], R: [1, 1] };
  return numbers.map(v => {
    if (/[147]/.test(v)) {
      h.L = [position[v], 1];
      return 'L';
    }
    if (/[369]/.test(v)) {
      h.R = [position[v], 1];
      return 'R';
    }
    let distL = Math.abs(position[v] - h.L[0]) + h.L[1];
    let distR = Math.abs(position[v] - h.R[0]) + h.R[1];
    if (distL === distR) {
      h[hand] = [position[v], 0];
      return hand;
    }
    if (distL < distR) {
      h.L = [position[v], 0];
      return 'L';
    }
    h.R = [position[v], 0];
    return 'R';
  }).join('');
}