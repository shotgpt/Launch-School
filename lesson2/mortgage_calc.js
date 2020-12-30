const readline = require('readline-sync');

let loanAmt, apr, len, monthlyPmt;
let recalc = 'y';

function prompt(message) {
  console.log("=> " + message);
}

function validAmt(num) {
  if (num > 0 && !Number.isNaN(num)) {
    return true;
  } else {
    prompt("Please enter a valid amount");
    return false;
  }
}

while (recalc === 'y') {

  prompt("What is the amount of your loan in USD?");
  loanAmt = Number(readline.question());

  while (!validAmt(loanAmt)) {
    loanAmt = Number(readline.question());
  }

  prompt("What is the Annual Percentage Rate of your loan? eg., .05");
  apr = readline.question();

  while (!validAmt(apr)) {
    apr = Number(readline.question());
  }

  prompt("What is the duration of your loan in months?");
  len = readline.question();

  while (!validAmt(len)) {
    len = Number(readline.question());
  }

  monthlyPmt = loanAmt * (apr / 12) / (1 - Math.pow((1 + (apr / 12)), (-len)));

  prompt("Your monthly payment is $" + monthlyPmt.toFixed(2)  + "\n");
  console.log("--------------------------------------------");

  prompt("Would you like to run another calculation y/n?");
  recalc = readline.question().toLowerCase();

  while (recalc !== 'y' && recalc !== 'n') {
    prompt("Please enter y/n");
    recalc = readline.question().toLowerCase();
  }

}

console.log("Goodbye...");
