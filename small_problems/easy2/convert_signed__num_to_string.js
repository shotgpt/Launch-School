const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function signedIntegerToString(num) {
  let pos;
  
  
  if(Math.sign(num) === 1) {
    pos = true;;
  }
  else if(Math.sign(num) === -1){
    pos = false;
    num *= -1;
  }
  
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
  if(pos){
    retString = '+' + retString;
  } else {
    retString = '-' + retString;
  }
return retString;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");