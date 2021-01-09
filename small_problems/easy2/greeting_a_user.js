let readline = require('readline-sync');

let userName = readline.question("What is your name?\n");

if(userName[userName.length-1] === '!') {
  userName = userName.slice(0, -1);
  console.log("WHY ARE WE YELLING " + userName + "?");
} else {
  console.log("Hello " + userName);
}