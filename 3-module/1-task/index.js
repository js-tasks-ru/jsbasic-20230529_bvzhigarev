function namify(users) {
  const result = [];
  for(const user of users) {
	  result.push(user.name);
  }
  return result;
}