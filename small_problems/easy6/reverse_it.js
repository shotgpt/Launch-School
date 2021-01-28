function reverseSentence(string) {
  let arr = string .split(' ').reverse().join(' ');
  return arr;
  
}


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"