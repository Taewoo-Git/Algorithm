// 내 풀이
function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach((val) => {
    let temp = -1;
    const skill_array = skill.split('').reverse();
    for (let i = 0; i < skill_array.length; i++) {
      const v = skill_array[i];
      if (temp === -1) temp = val.indexOf(v);
      else {
        const cur = val.indexOf(v);
        if (cur === -1 || cur >= temp) break;
        else temp = cur;
      }
      if (i === skill_array.length - 1) ++answer;
    }
  });
  return answer;
}

// 다른 사람 풀이
function solution(skill, skill_trees) {
  let regex = new RegExp(`[^${skill}]`, 'g');
  return skill_trees
    .map((v) => v.replace(regex, ''))
    .filter((v) => {
      return skill.indexOf(v) === 0 || v === "";
    }).length;
}