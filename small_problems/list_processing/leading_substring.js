
function leadingSubstrings(string) {
  let retArr = [string[0]];
  
  for(let i = 1; i < string.length; i++) {
    retArr.push(retArr[i-1] + string[i]);
  }
  return retArr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]