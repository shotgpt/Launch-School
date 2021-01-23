function average(arr) {
  let total = arr.reduce((accum, curr) => accum += curr);
  let avg = Math.floor(total / arr.length);
  return avg;
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40