// 내 풀이
function solution(dirs) {
  let pos = [0, 0];
  let course = [];
  dirs.split('').forEach((val) => {
    const init = JSON.stringify(pos);
    switch (val) {
      case 'U':
        ++pos[1];
        break;
      case 'D':
        --pos[1];
        break;
      case 'R':
        ++pos[0];
        break;
      case 'L':
        --pos[0];
        break;
    }
    if (Math.abs(pos[0]) > 5) pos[0] > 0 ? --pos[0] : ++pos[0];
    else if (Math.abs(pos[1]) > 5) pos[1] > 0 ? --pos[1] : ++pos[1];
    else {
      course.push(`${init} > ${JSON.stringify(pos)}`);
      course.push(`${JSON.stringify(pos)} > ${init}`);
    }
  });
  course = [...new Set(course)];
  return course.length / 2;
}