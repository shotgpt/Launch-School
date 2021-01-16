// alg: - print one *
//     - print two *
//     - keep printing until input number of stars on line input number

function triangle(num){
  for(let i = 1; i <= num; i++) {
    let outStr = ' '.repeat(num - i) + '*'.repeat(i);
    console.log(outStr);
  }
}




triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********