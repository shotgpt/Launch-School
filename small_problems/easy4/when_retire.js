let readline = require("readline-sync");

let age = Number(readline.question("What is your age? "));
let ageRetire = Number(readline.question("At what age would you like to retire? "));


let today = new Date();
let currentYear = today.getFullYear();

let yearRetire = currentYear + (ageRetire - age);

console.log(`Its 2021. You will retire in ${yearRetire}.`);
console.log(`You have only ${(ageRetire - age)} years of work to go!`);