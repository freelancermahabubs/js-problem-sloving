// paperRequirements.js

// const firstBookForPrintNeedPaper = 100;
// const secondBookForPrintNeedPaper = 200;
// const thirdBookForPrintNeedPaper = 300;


function paperRequirements(book1, book2, book3){
  
  let sum = 0;
  let needACopy1 = book1 * 100;
  let needACopy2 = book2 * 200;
  let needACopy3 = book3 * 300;

  sum = sum + needACopy1 + needACopy2 + needACopy3;
  return sum

}
const totalPaperNeed = paperRequirements(1, 1, 1);
console.log(totalPaperNeed);

