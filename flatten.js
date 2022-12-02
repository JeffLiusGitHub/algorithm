const flatten = (array, depth, result) => {
	result || (result = []);

	if (array == null) {
		return result;
	}
	for (const value of array) {
		if (typeof value === 'object') {
			if (depth > 1) {
				return flatten(value, depth - 1, result);
			}
		} else {
			result.push(value);
		}
	}
	return result;
};
console.log(flatten([1, 2, 7, 8, 9, 10 [3, [4, [5]], 6]], 5));
