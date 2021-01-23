function multiplyAllPairs(arr1, arr2) {
  let retArr = [];
  
  arr1.forEach(num => {
    arr2.forEach(num2 => {
      retArr.push(num * num2);
    })
  })
  return retArr.sort((a,b) => a-b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]