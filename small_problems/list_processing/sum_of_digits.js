/*
function sum(digits) {
  
  let array1 = digits.split('');
  let total = 0;
  
  array1.forEach(element => total += parseFloat(element));
    
  
  return total;
}
*/

function sum(number) {
  return String(number).split("").reduce((accum, digit) => accum + Number(digit), 0);
}