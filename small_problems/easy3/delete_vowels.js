// input: an array of strings
// output: returns an array with all vowels removed

// alg: cycle through each array index.  at each index cycle through each string and remove vowels.

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function removeVowels(arrOfStrings) {
  for(i in arrOfStrings) {
    let newStr = '';
    for(i2 in arrOfStrings[i]) {
      if(!VOWELS.includes(arrOfStrings[i][i2])){
        newStr += arrOfStrings[i][i2];
      }
    }
    arrOfStrings[i] = newStr;
  }
  console.log(arrOfStrings);
  return;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]