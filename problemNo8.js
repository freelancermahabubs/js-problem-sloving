// তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

let numbers = [1, 2, 3, 4, 5, 58, 78, 96, 78];
const element = numbers.length;
console.log(element);

const thirdElement = numbers [3] ;
console.log(thirdElement);



const firstSecondSum = numbers[0] + numbers[5];
console.log(firstSecondSum);

const lastElementDelete = numbers[numbers.length -1];
console.log(lastElementDelete);
// const firstElementDelete = numbers.shift();
// console.log(firstElementDelete);

console.log(numbers);

let arrs = [1, 2, 3, 4, 5];

// Remove the third element (index 2) and insert it at the end of the array
// let removedElement = arrs.splice(4);
// arrs.push(removedElement[2]);
// console.log("Array after moving the third element to the end: " + arrs);

// let arr = [1, 2, 3, 4, 5];

// Swap the first and last elements
let temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;

console.log("Array after swapping the first and last elements: " + arr);




