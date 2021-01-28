function  isBalanced(string) {
  string = string.replace(/[^()]/gi, '');
  let arr = string.split('');
  if(arr.length === 0) return true;
  if(arr[0] !== '(') return false;
  let outArr = [];
  for(let i in arr) {
    if(arr[i] === '(') {
      outArr.push('(');
    } else {
      if(outArr[outArr.length-1] !== '(') return false;
      else outArr.pop();
    } 
  }
  return ( outArr.length === 0 ? true : false);
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);