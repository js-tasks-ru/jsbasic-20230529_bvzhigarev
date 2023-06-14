function sumSalary(salaries) {
  return Object.values(salaries).reduce(
		(acc, curr) => {
			if(!isNaN(curr) && isFinite(curr) && typeof curr === "number") {
				return acc + curr;
			}
			return acc; 
		}
	, 0);
}