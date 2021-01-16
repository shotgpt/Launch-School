
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

function isPalindromicNumber(num) {
  return isPalindrome(num.toString());
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true