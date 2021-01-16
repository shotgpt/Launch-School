// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

function cleanUp(string) {
  let outStr = ''
  string = string.replace(/[^a-z]/gmi, " ");
  
  for(let i = 0; i < string.length; i++) {
    if(string[i] === ' ') {
      outStr += string[i];
      while(string[i+1] === ' ') {
        i++;
      }
    } else {
      outStr += string[i]
    }
  }
  return outStr;
}



console.log(cleanUp("---what's my +*& line?"));    // " what s my line "