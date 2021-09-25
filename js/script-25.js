// Change code below this line
const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, index, users) => users.indexOf(friend) === index); 

// Change code above this line