function union(arr1, arr2) {
  let outArr = arr1.concat(...arr2);
  let obj = {};
  
  outArr.forEach(num => {
    obj[num] = 1;
  })
  return Object.keys(obj).map(num => +num);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]