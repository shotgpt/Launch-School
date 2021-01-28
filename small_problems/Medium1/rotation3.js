function rotateRightmostDigits(num, cnt) {
  let rotateIndex = -1*cnt;
  let arr = num.toString().split('');
  let arrToRot = arr.slice(-1*cnt);
  arrToRot.push(arrToRot.shift());
  arr = arr.slice(0,rotateIndex).concat(...arrToRot);
  return parseInt(arr.join(''));
}
function maxRotation(num) {
  let cnt = num.toString().length;
  for(let i = cnt; i > 0; i--) {
    num = rotateRightmostDigits(num, i);
    //console.log("num is = " + num);
  }
  return num;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845