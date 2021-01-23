function halvsies(arr) {
  let arrL = arr.slice(0,(Math.ceil(arr.length/2 + 1)));
  let arrR = arr.slice(Math.ceil(arr.length/2));
  let arrOut = [];
  arrOut.push(arrL, arrR);
  return arrOut;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]