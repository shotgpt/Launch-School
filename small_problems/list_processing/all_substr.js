function substrings(string) {
  let arr = string.split('');
  let arrOut = [];
  
  for(let i = 0; i < arr.length; i++){
    
    arrOut.push(arr[i]);
    
    for( let j = i+1; j < arr.length; j++) {
      let strToAdd = arrOut[arrOut.length - 1];
      arrOut.push(strToAdd + arr[j]);
    }
    
  }
  return arrOut;
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]