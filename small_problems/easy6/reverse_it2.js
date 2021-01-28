function reverseWords(string) {
  let arr = string .split(' ').map(str => {
    return str.length > 4 ? 
    str.split('').reverse().join('') : str;
    
  })
  
  return arr.join(' ');
  
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"