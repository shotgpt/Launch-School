
function asciiValue(string) {
  let array = string.split('');
  let total = 0;
  
  for(let i = 0; i < array.length; i++) {
    let asciiValue = array[i].charCodeAt();
    total += asciiValue;
  }
  return total;
}

console.log("this is the total " + asciiValue("Launch School"));