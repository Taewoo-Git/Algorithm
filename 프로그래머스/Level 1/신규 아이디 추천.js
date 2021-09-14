// 내 풀이
function solution(new_id) {
  let answer = new_id.toLowerCase()
    .split(/[^\w-\.]/).join('')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/, '');
  return answer.length > 2 ? answer : answer.replace(/(.{1})$/, '$1$1$1').slice(0, 3);
}

// 다른 사람 풀이
function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15).replace(/\.$/, '');
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}