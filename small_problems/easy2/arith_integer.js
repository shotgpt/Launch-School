let readline = require("readline-sync");

console.log("Enter the first number");
let num1 = parseInt(readline.question());

console.log("Enter the second number");
let num2 = parseInt(readline.question());

function printOps(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`)
  console.log(`${num1} * ${num2} = ${num1 * num2}`)
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`)
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`)
}

printOps(num1, num2);