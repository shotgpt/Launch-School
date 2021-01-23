

function swap(string) {

let arr = string.split(' ')
let arr2 = arr.map(word => {
  let lastL = word[word.length-1];
  let firstL = word[0];
  
  let newWord =  lastL + word.slice(1, -1) + firstL;
  return newWord;
})
return arr2.join(' ');
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"