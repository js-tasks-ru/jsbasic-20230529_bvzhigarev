function getMinMax(str) {
  const result = {
		min: 0,
		max: 0
	}
	let arr = str.split(' ');
	let inter = 0;
	for(const elem of arr) {
		inter = Number.parseFloat(elem)
		if(inter > result.max) {
			result.max = inter;
		}
		if(inter < result.min) {
			result.min = inter;
		}
	}
	return result;
}
