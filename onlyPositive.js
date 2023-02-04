// only Positive.js 

function onlyPositive(numbers){
  let positiveNumber = [];
  for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(number >= 0){
      positiveNumber.push(number);
    }
    else{
      break;
    }
  }
  return positiveNumber;
}
const myNumber = [45, 47, 78, 521, 785, 789, -896, 7854, 7452, 1235];
const positiveNumber = onlyPositive(myNumber);
console.log(positiveNumber);