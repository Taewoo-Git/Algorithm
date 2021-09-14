// 내 풀이
function solution(s) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
  Object.keys(numbers).forEach((val) => s = s.replace(new RegExp(val, 'g'), numbers[val]));
  return Number(s);
}

// 다른 사람 풀이
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for (let i = 0; i < numbers.length; i++) {
    let arr = s.split(numbers[i]);
    s = arr.join(i);
  }
  return Number(s);
}