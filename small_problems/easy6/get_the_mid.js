function centerOf(string) {
  let retStr = '';
  let length = string.length;
  
  if(string.length % 2 === 0) {
    retStr = string.slice(length/2 - 1, length/2 + 1);
  } else {
    retStr = string[Math.floor(length/2)];
  }
  return retStr;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"