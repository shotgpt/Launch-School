function stringy(int) {

  if (int === 0) return "";

  let string = '1';

  while (true) {
    string += '0';
    if (string.length === int) break;

    string += '1';
    if (string.length === int) break;
  }
  return string;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
