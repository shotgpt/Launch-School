function isItOdd(num) {
  if(Math.abs(num) % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}

console.log(isItOdd(3));