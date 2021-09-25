// Change code below this line
const getSortedFriends = users => users
    .flatMap(user => user.friends)
    .filter((user, index, users) => users.indexOf(user) === index)
    .sort((a, b) => a.localeCompare(b));
// Change code above this line