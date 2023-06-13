function filterRange(arr, a, b) {
  const result = [];
	for(const elem of arr) {
		if(a <= elem && b >= elem) {
			result.push(elem);
		}
	}
	return result;
}