function factorial(number) {
	let result = number;
  if(number === 0) {
    return 1;
  }
	for(let i = number - 1; i > 1; i--) {
		result = result * i;
	}
	return result;
}