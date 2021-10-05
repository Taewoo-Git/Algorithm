// 다른 사람 풀이
function solution(arr) {
  const answer = [0, 0];

  const compress = (x, y, n) => {
    if (n === 1) return answer[arr[x][y]]++;

    let flag = true;
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[x][y] !== arr[i][j]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) return answer[arr[x][y]]++;

    n /= 2;

    compress(x, y, n);
    compress(x + n, y, n);
    compress(x, y + n, n);
    compress(x + n, y + n, n);
  }

  compress(0, 0, arr.length);

  return answer;
}

// 참고, https://youngslog.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BF%BC%EB%93%9C%EC%95%95%EC%B6%95-%ED%9B%84-%EA%B0%9C%EC%88%98-%EC%84%B8%EA%B8%B0-javascript-abf959607d3b