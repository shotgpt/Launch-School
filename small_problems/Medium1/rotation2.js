function rotateRightmostDigits(num, cnt) {
  let rotateIndex = -1*cnt;
  let arr = num.toString().split('');
  let arrToRot = arr.slice(-1*cnt);
  arrToRot.push(arrToRot.shift());
  arr = arr.slice(0,rotateIndex).concat(...arrToRot);
  return parseInt(arr.join(''));
  

}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917