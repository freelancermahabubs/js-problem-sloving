function bestFriend(names){
  let longestName = " ";
  for(let  i = 0; i < names.length; i++) {
    let name = names[i];
    if(name.length > longestName.length){
      longestName = name;
    }
  }
  return longestName;
}
let bestFriends = ['Kamal', 'Jamal', 'Mahaub Alom', 'Rofiq Uddin Jamaddar'];
const longestName = bestFriend(bestFriends);
console.log('This is Tallest Name in this array:', longestName);


