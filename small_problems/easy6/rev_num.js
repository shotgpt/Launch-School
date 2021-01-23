function reverseNumber(num) {
  let numOut = num.toString().split('').reverse();
  if(numOut[0] === '0') {
    let i = 0;
    while(numOut[i] == '0') i++;
    numOut = numOut.slice(i);
  }
  return parseInt(numOut.join(''));
}
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1