// Change code below this line
const getNamesSortedByFriendCount = users => [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
// Change code above this line