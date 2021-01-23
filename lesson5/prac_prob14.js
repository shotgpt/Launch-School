let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

for(let key in obj) {
  if(obj[key].type === 'fruit') {
    arr.push(obj[key].colors);
  } else arr.push(obj[key].size.toUpperCase());
}
console.log(arr);



// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// });