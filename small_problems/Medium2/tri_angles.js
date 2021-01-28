function triangle(ang1, ang2, ang3) {
  let arr = [];
  arr = arr.concat(ang1, ang2, ang3).sort((a,b) => a - b);
  let sumOfAng = arr.reduce((accum, curr) => accum += curr);
  if(sumOfAng < 180 || arr[0] <= 0) return "invalid";
  else if(arr[2] < 90) return "acute";
  else if(arr.includes(90)) return "right";
  else if(arr[2] > 90) return "obtuse";
  
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"