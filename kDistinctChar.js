const inputData1 = '2eceba';

const kDistinctChar = (inputData1) => {
	const k = inputData1[0];
	const s = inputData1.slice(1);
	let start = 0;
	const soFar = new Map();
	let maxStart, maxEnd;
	let max = 0;
	for (let end = 0; end < s.length; end++) {
		let rightChar = s[end];
		if (!soFar.get(rightChar)) {
			soFar.set(rightChar, 1);
		} else {
			soFar.set(rightChar, soFar.get(rightChar) + 1);
		}
		while (soFar.size > k) {
			let leftChar = s[start];
			if (soFar.get(leftChar) > 1) {
				soFar.set(leftChar, soFar.get(leftChar) - 1);
			} else {
				soFar.delete(leftChar);
			}
			start++;
		}
		if (end - start + 1 > max) {
			maxStart = start;
			maxEnd = end;
			max = end - start + 1;
		}
	}
	return `${max}${s.slice(maxStart, maxEnd+1)}`;
};
console.log(kDistinctChar(inputData1));