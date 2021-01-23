let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
                
function countOccurrences(arr) {
  let vehObj = {};
  
  vehicles.forEach(name => {
    if(vehObj.hasOwnProperty(name)) {
      vehObj[name]++;
    } else {
      vehObj[name] = 1;
    }
  })
  for(key in vehObj) {
    console.log(`${key} => ${vehObj[key]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2