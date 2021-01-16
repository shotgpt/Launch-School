let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

agesArr = Object.values(ages);

let minAge = agesArr[0];

agesArr.map((age) => {
  if(age<minAge) {
    minAge = age;
  }
})

console.log(minAge);

// let agesArr = Object.values(ages);
// Math.min(...agesArr); // => 10

// Math.min(1, 2, 3)