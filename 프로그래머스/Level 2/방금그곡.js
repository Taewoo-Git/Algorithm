// 내 풀이
function solution(m, musicinfos) {
  m = m.split('').join('-').replace(/(\w)-(#)/g, '$1$2') + '-';
  let music = musicinfos.map((val) => {
    const arr = val.split(',');
    const time = new Date(`2021-01-01 ${arr[1]}:00`) - new Date(`2021-01-01 ${arr[0]}:00`);
    const minute = time / 1000 / 60;
    let notes = arr[3].split('').join(' ').replace(/(\w) (#)/g, '$1$2').split(' ');
    if (minute > notes.length) {
      let temp = [];
      for (let i = 0; i < Math.ceil(minute / notes.length); i++) {
        temp.push(...notes);
      }
      notes = temp.slice(0, minute);
    }
    else notes = notes.slice(0, minute);
    return { name: arr[2], melody: notes.join('-') + '-', len: notes.length };
  })
    .filter((val) => val.melody.includes(m))
    .sort((a, b) => b.len - a.len);
  return music.length ? music[0].name : '(None)';
}

// 다른 사람 풀이
const solution = (m, musicInfos) => {
  let answer = '';
  musicInfos = musicInfos.map((v) => {
    let arr = v.split(',');
    let timeDiff = (new Date(`1970-01-01 ${arr[1]}:00`) - new Date(`1970-01-01 ${arr[0]}:00`)) / 60000;
    let melody = arr[3].replace(/[A-Z]#/g, m => m[0].toLowerCase());
    melody = melody.repeat(Math.ceil(timeDiff / melody.length)).substr(0, timeDiff);
    return `${timeDiff},${arr[2]},${melody}`;
  });
  musicInfos.sort((a, b) => b.split(',')[0] - a.split(',')[0]);
  answer = musicInfos.filter((v) => v.split(',')[2].indexOf(m.replace(/[A-Z]#/g, m => m[0].toLowerCase())) != -1);
  return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
}