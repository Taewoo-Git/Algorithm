// 내 풀이
function solution(msg) {
  const answer = [];
  const dic = new Map();
  for (let i = 0; i <= 25; i++) {
    dic.set(String.fromCharCode(65 + i), i + 1);
  }
  const temp = msg.split('');
  const isContain = (w, idx) => {
    const c = temp[idx];
    if (dic.has(w)) {
      if (!c || !isContain(w + c, idx + 1)) {
        answer.push(dic.get(w));
      } else temp.shift();
      return true;
    } else {
      dic.set(w, dic.size + 1);
      return false;
    }
  }
  while (temp.length) {
    isContain(temp.shift(), 0);
  }
  return answer;
}

// 다른 사람 풀이
function solution(msg) {
  var list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var dic = list.reduce((obj, val, idx) => (obj[val] = idx + 1, obj), {});
  var result = [];
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    var c = msg[i + 1];
    while (dic[w + c] && i < msg.length - 1) {
      i++;
      w = w + c;
      c = msg[i + 1];
    }
    result.push(dic[w]);
    list.push(dic[w + c]);
    dic[w + c] = list.length;
  }
  return result;
}