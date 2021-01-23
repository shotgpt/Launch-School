let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map((obj => {
  let newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }
  return newObj;
}))

console.log(arr2);
console.log(arr);

