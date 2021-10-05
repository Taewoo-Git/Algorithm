// 다른 사람 풀이
function solution(s) {
	let arr = [];
	for (let i = 1; i <= parseInt(s.length / 2); i++) {
		let str = s.substr(0, i);
		let cnt = 1;
		for (let j = i; j <= s.length - i; j = j + i) {
			if (s.substr(j - i, i) === s.substr(j, i)) {
				cnt++;
				if (s.length - j - i < i) {
					str += cnt;
				}
			} else {
				if (cnt !== 1) {
					str += cnt;
					str += s.substr(j, i);
				} else str += s.substr(j, i);
				cnt = 1;
			}
		}
		str += s.substr(s.length - 1 - (s.length % i), (s.length % i));
		arr.push(str);
	}
	let min = 100000;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length < min) min = arr[i].length;
	}
	if (s.length === 1) min = 1;
	return min;
}

// 참고, https://jongbeom-dev.tistory.com/148