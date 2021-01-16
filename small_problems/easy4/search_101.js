let readline = require("readline-sync");

let arrNum = [];

arrNum.push(readline.question("Enter  the 1st number: "));
arrNum.push(readline.question("Enter  the 2nd number: "));
arrNum.push(readline.question("Enter  the 3rd number: "));
arrNum.push(readline.question("Enter  the 4th number: "));
arrNum.push(readline.question("Enter  the 5th number: "));
arrNum.push(readline.question("Enter  the last number: "));

let checkNum = arrNum.pop();
let arrStr = arrNum.join(', ');

if(arrNum.includes(checkNum)) {
  console.log(`The number ${checkNum} appears in ${arrStr}.`);
} else { console.log(`The number ${checkNum} does not appear in ${arrStr}.`);
  
}
