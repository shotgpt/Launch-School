let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr2 = arr.map(arr => {
  if(typeof arr[0] === 'number') {
    return arr.slice().sort((a,b) => a-b);
  } else return arr.sort();
})

console.log(arr2);

