
function isDouble(num) {
  let str = num.toString();
  let arr = str.split('');
  let arr2 = arr.slice(arr.length/2);
  arr = arr.slice(0, arr.length/2);
  
  if(str.length % 2 === 1) return false;
  
  for(i in arr) {
    if(arr[i] === arr2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function twice(num) {
  if(!isDouble(num)) {
    return num*2;
  } else {
    return num;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676