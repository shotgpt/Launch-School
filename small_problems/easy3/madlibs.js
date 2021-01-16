let readline = require('readline-sync');

let noun = readline.question("Enter a noun:  ");
let verb = readline.question("Enter a verb:  ");
let adjetive = readline.question("Enter an adjective:  ");
let adverb = readline.question("Enter an adverb:  ");

console.log(`Do you ${verb} your ${adjetive} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjetive} ${noun} ${verb} ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjetive} Joe's turtle.`);