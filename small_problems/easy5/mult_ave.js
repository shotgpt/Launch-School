function multiplicativeAverage(arr) {
  let total = arr.reduce((accum, curr) => accum*=curr);
  return (total/arr.length).toFixed(3).toString();
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"