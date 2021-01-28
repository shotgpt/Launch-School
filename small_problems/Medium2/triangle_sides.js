const triangle = (num1, num2, num3) => {
  let arr = [];
  arr = arr.concat(num1, num2, num3).sort((a,b) => a-b);
  if(arr[0] <= 0) return "invalid";
  else if(arr[0] + arr[1] <= arr[2]) return "invalid";
  else {
    if(arr[0] === arr[1] &&
    arr[1] === arr[2]) return "equilateral";
    else if(arr[0] === arr[1] ||
    arr[1] === arr[2]) return "isosceles";
    else return "scalene";
  }
  
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"