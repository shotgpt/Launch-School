// input: string
// output: true if all letters are uppercase


function isUppercase(string) {
  console.log(string.toUpperCase() === string);
  return;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true