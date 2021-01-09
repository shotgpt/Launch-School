const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function integerToString(num) {
  let retString = '';
  
  if(num<10) return numArray[num];
  
  let i = 10;
  let digit = 0;
  let letter = '';
  
  while(true) {
    digit = ((num % i));
    if(digit === 0) {
      letter = numArray[digit];
      retString = letter + retString.slice(0);
      i*=10;
      continue;
    } else {
      letter = numArray[Math.floor((digit)/(i/10))];
      retString = letter + retString.slice(0);
      if(num % i === num % (i * 10)) {
      break;
      }
      i*=10;
    }
  }
return retString;
}

console.log(integerToString(4321) === '4321');      // "4321"
console.log(integerToString(0) === '0');         // "0"
console.log(integerToString(5000) === '5000');      // "5000"
console.log(integerToString(1234567890) === '1234567890');      // "1234567890"