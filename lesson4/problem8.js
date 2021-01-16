let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let map = {};

for(i in flintstones) {
  map[flintstones[i]] = +i;
}
console.log(map);