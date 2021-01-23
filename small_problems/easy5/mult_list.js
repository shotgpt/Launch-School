function multiplyList(arr1, arr2) {
  let arrOut = [];
  for(let i = 0; i< arr1.length; i++) {
    let newVal = arr1[i] * arr2[i]
    arrOut.push(newVal);
  }
  return arrOut;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]