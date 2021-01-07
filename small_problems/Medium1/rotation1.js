
function rotateArray(arr) {
  let modArray = arr.slice();
  
  if(!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length < 1) {
    return []
  } else {
    let container = modArray.shift();
    modArray.push(container);
    return modArray;
  }
}
