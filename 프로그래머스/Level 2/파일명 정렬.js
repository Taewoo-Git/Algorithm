function solution(files) {
  const temp = files.map((v) => new Object({
    name: v,
    head: v.split(/\d/)[0].toLowerCase(),
    number: v.match(/[\d]{1,}/)[0]
  }));
  const answer = temp.sort((a, b) => a.number - b.number).sort((a, b) => {
    if (a.head < b.head) {
      return -1;
    }
    if (a.head > b.head) {
      return 1;
    }
    return 0;
  }).map((v) => v.name);
  return answer;
}