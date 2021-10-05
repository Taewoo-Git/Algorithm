// 내 풀이
function solution(s) {
  var answer = [0, 0];
  const convert = (bin) => {
    if (bin == 1) return;
    ++answer[0];
    bin = bin.split('').filter((v) => {
      if (v == 0) {
        ++answer[1];
        return false;
      } else return true;
    });
    convert(bin.length.toString(2));
  }
  convert(s);
  return answer;
}

// 다른 사람 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}