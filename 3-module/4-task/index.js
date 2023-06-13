function showSalary(users, age) {
  let result = '';
	for(let i = 0; i < users.length; i++) {
		if(users[i].age <= age) {
			result = result + users[i].name + ", " + users[i].balance;
			if(i < (users.length - 1)) {
				result += "\n";
			}
		}	
	}
	return result.slice(0, result.length);
}