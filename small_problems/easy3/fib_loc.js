// input: number length
// output: location of first fib number with number length of digits

// Problem: series is 1, 1, 2, 3, 4, 5, 9, 14
//         location   1  2  3  4  5  6  7  8

// alg: - calculate fib series one at a time
//       - does the number of digits equal input?
//         -if no then calculate the next number
//         =if yes then return index
        
function findFibonacciIndexByLength(num) {
  let fibArr = [1,1];
  
  if(num === 1) return 1;
  
  let i = 2
  while(true){
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
    if(fibArr[i].toString().length === num) return i+1;
    else i++;
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// Don't try any higher values until you read the solution Discussion