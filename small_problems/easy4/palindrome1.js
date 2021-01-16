
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

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }