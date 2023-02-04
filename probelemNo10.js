// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

let numbers = [45, 80, 56, 84, 895, 120, 784, 96];
for(let i = 0; i < numbers.length; i++){
  const element = numbers[i];
  if( element >= 80){
    console.log(element);
  }
}