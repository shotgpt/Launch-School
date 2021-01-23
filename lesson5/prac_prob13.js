let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let arr2 = arr.sort((a,b) => {
  
  let aTot = a.filter(num => num % 2 === 1).reduce((acc, curr) => acc+=curr);
  let bTot = b.filter(num => num % 2 === 1).reduce((acc, curr) => acc+=curr);
  console.log("a total = " + aTot);
  console.log("b total = " + bTot);
  
  return aTot - bTot;
})

console.log(arr2);