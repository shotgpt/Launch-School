const readline = require("readline-sync");

console.log("What is the bill?");
let bill = + readline.question();

console.log("What is the tip percentage?");
let tipPercent = + readline.question();

let tipInDollars = (tipPercent * bill);
console.log("The tip is $" + tipInDollars.toFixed(2));

let totalBill = (tipInDollars + bill);
console.log("Your total bill is $" + totalBill.toFixed(2));