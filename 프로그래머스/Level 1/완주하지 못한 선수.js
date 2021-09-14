// 내 풀이 1 (시간 초과)
function solution(participant, completion) {
  completion.forEach((v) => participant.splice(participant.indexOf(v), 1));
  return participant[0];
}

// 내 풀이 2
function solution(participant, completion) {
  const temp = new Map();
  participant.forEach((v) => {
    if (temp.has(v)) temp.set(v, temp.get(v) + 1);
    else temp.set(v, 1);
  });
  completion.forEach((v) => {
    const n = temp.get(v);
    if (n > 1) temp.set(v, n - 1);
    else temp.delete(v);
  });
  return temp.keys().next().value;
}

// 다른 사람 풀이 1
const solution = (participant, completion) => participant.find((el) => !completion[el]--, completion.map((v) => completion[v] = (completion[v] | 0) + 1));

// 다른 사람 풀이 2
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 다른 사람 풀이 3
const solution = (participant, completion) => {
  participant.sort();
  completion.sort();
  while (participant.length) {
    let v = participant.pop();
    if (v !== completion.pop()) return v;
  }
}

// 다른 사람 풀이 4
function solution(participant, completion) {
  let dic = completion.reduce((obj, val) => (obj[val] = obj[val] ? obj[val] + 1 : 1, obj), {});
  return participant.find(el => {
    if (dic[el]) dic[el] = dic[el] - 1;
    else return true;
  });
}

// 다른 사람 풀이 5
function solution(participant, completion) {
  const map = new Map();
  for (let i = 0; i < participant.length; i++) {
    let a = participant[i], b = completion[i];
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }
  for (let [k, v] of map) {
    if (v > 0) return k;
  }
  return null;
}