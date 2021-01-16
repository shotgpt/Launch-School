function runningTotal(arr) {
  
  for(let i = 1; i < arr.length; i++) {
    arr[i] += arr[i-1];
  }
  return arr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []