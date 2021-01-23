function dms(num) {
  let strDeg = Math.floor(num).toString();
  let numMin = ((num % 1) * 60);
  let strMin = Math.floor(numMin).toString();
  let strSec = Math.floor(((numMin % 1) * 60)).toString();
  return `${strDeg}°${padZeroes(strMin)}'${padZeroes(strSec)}"`;
}
function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"