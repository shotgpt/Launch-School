const readline = require('readline-sync');

let roomArea = 0;
let length = 0;
let width = 0;
let meterToFeet = 10.7639;

console.log("Enter the length of the room in meters: ");
length = Number(readline.prompt());

console.log("Enter the width of the room in meters: ");
width = Number(readline.prompt());

roomArea = (width * length)*meterToFeet;
console.log("The area of the room is " + roomArea.toFixed(2) + " square meters");