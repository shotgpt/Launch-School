
function multisum(num) {
  let total = 0;
  
  if(num < 3) return 0;
  else {
    for(let i = num; i > 2; i--) {
      if(i % 3 === 0 || i % 5 === 0) {
        total += i;
        console.log("num is = " + i);
      }
    }
  }
  return total;
}

console.log(multisum(1000));