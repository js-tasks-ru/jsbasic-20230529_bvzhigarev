function showSalary(users, maxAge) {
	let result = [];
	for(const user of users) {
		if(user.age <= maxAge) {
			result.push(user);	
		}
	}
	result = result.map((user) => {
		return user.name + ', ' + user.balance;
	});
	return result.join('\n');
}