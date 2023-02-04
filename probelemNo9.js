// তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 


let phones = ['Samsung', 'Oppo', 'HTC', 'Nokia'];
for(let i = 0; i < phones.length; i++){
  const element = phones[i];
  // console.log(element);
}
for(const item of phones) {
  console.log(item);
}