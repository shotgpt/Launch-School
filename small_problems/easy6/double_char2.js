function isLetterToDouble(str) {
  let vowels = ['a','e','i','o','u'];
  if((str.toLocaleLowerCase() > 'a' && 
  str.toLocaleLowerCase() < 'z')){
    if(!vowels.includes(str.toLowerCase())){
      return true;
    }
  } else return false;
}

function doubleConsonants(string) {
  let outStr = '';
  
  for(let i in string) {
    if(isLetterToDouble(string[i])) outStr += string[i].repeat(2);
    else outStr += string[i];
  }
  return outStr;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""