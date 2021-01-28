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

function isStrPalindrome(str) {
  let i = 0;
  let j = str.length-1
  if(str.length < 2) return false;
  
  while(i < j) {
    if(str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function palindromes(str) {
  let substrArr = substrings(str);
  let outArr = [];
  substrArr.forEach(str => {
    if(isStrPalindrome(str)) {
      outArr.push(str);
    }
  })
  return outArr;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]