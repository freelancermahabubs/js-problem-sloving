
// QUESTION NUMBER 01

// this is a booean type vairable 
var isPen = true;
console.log(typeof isPen);

// this is a number type vairable
var numbers = 14;
console.log(typeof numbers);

// this is String type variable
var names = 'Mahaub alom';
console.log(typeof names);

// QUESTION NUMBER 02

// const and let write variable
let x = 10;
x = 20;
console.log(x);

// const y = 30;
// y = 40;
// console.log(y);

// QUESTION NUMBER 03

let num1 = 50;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);
let sub = num1 - num2;
console.log(sub);

let multi = num1 * num2;
console.log(multi);
let divistion = num1 / num2;
console.log(divistion);
let modules = num1 % num2;
console.log(modules);


// তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

let number1 = 452; 
let number2 = 452;
if(number1 < number2) {
   console.log(number1 + '', "is less than", '' + number2);
}
else if(number1 > number2) {
  console.log(number1 + '', "is greater than", '' + number2);
}
else if(number1 != number2) {
  console.log(number1 + '', "is not equal", '' + number2);
}
else if(number1 === number2) {
  console.log(number1 + '', "is equal ?", '' + number2);
}
else if(number1 <= number2) {
  console.log(number1 + '', "is less than or equal", '' + number2);
}
else if(number1 >= number1) {
  console.log(number1 + '', "is grater than or equal", '' + number2);
}

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

// Answers
let phonePrice1 = 14000;
let phonePrice2 = 15000;
if(phonePrice1 < 50000 && phonePrice2 < 50000) {
  console.log('this is true');
}
else if(phonePrice1 > 400 || phonePrice2 < 140000){
  console.log('on of the condition is true');
}

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো | 

let phones = '5000';
if( phones < 1400){
  console('Thobe tumi i tell phone pabe');
}
else{
  console.log('thobe tumi saymphone phone pabe');
}
// তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// this is odd number 
let nums = 7;
while(nums <= 19) {
  if(nums % 2 != 0){
    console.log(nums);
    
  }
  nums++;

}

// this is even numbers 
let nums2 = 20;
while(nums2 <= 30) {
  if(nums2 % 2 === 0) {
    console.log(nums2);
  }
  nums2++
}












