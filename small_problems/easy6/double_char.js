function repeater(string) {
  let outStr = '';
  
  for(let i in string) {
    outStr += string[i].repeat(2);
  }
  return outStr;
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""