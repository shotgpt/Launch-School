
function crunch(string) {
  let arr = string.split('');
  
  let modArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    modArr.push(arr[i]);
    while(arr[i] === arr[i+1]) {
      i++;
    }
  }
  return modArr.join('');
}  

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""