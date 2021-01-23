function swapName(string) {
  let arr = string.split(' ');
  return arr.reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"