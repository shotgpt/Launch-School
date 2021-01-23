function rotateRightmostDigits(num, cnt) {
  let divisor = 1 * Math.pow(10, cnt);
  let numToRot = num % divisor;
  
  let firstNum = Math.floor(numToRot/(.1 * divisor));
  let rotatedNum = (numToRot % (.1 * divisor))*(.1 * divisor) + firstNum;
  console.log(`number input ${num}    number to rotate ${numToRot}    number rotated ${rotatedNum}
    first number is ${firstNum}`);
  
  return (num - numToRot + rotatedNum);

}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917