function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  for(const friend of friends) {
    ul.insertAdjacentHTML('beforeend', '<li>' + friend.firstName + " " + friend.lastName + '</li>');
  }
  return ul;
}