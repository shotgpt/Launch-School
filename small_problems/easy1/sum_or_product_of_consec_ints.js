let readline = require('readline-sync');

function  sum(num) {
  let total = num;
  for(let i = num - 1; i > 0; i--){
    total += i; 
  }
  console.log("The sum of the integers between 1 and " + num + " is " + total + ".");
}

function  prod(num) {
  let total = num;
  for(let i = num - 1; i > 0; i--){
    total *= i; 
  }
  console.log("The sum of the integers between 1 and " + num + " is " + total + ".");
}

console.log("Please enter an integer greater than 0: ");
let inputNum = parseFloat(readline.question());

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let operation = readline.question();

if(operation === 's') {
  sum(inputNum);
} else if(operation === 'p') {
  prod(inputNum);
} else {
  console.log("error");
}



