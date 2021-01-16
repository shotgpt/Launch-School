
function isPalindrome(string) {
  let p1 = 0;
  let p2 = string.length-1;
  
  while(p1 < p2) {
    if(string[p1] !== string[p2]) return false
    else {
      p1++;
      p2--;
    }
  }
  return true;
}

function isRealPalindrome(string) {
  let strMod = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return isPalindrome(strMod);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false