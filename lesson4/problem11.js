let statement = "The Flintstones Rock";

let statObj = {};

for(i in statement) {
  if(statObj[statement[i]]) {
    statObj[statement[i]]++;
  } else {
    statObj[statement[i]] = 1;
  }
}

console.log(statObj);