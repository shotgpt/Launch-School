function buyFruit(arr) {
  let retArr = [];
  
  arr.forEach(arr => {
    for(let i = 0; i < arr[1]; i++){
      retArr.push(arr[0]);
    }
  })
  return retArr;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]