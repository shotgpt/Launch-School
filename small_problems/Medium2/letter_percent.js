function letterPercentages(str) {
  let lowerPercent = ((str.replace(/[^a-z]/g, '').length)/str.length *100).toFixed(2);
  let upperPercent = ((str.replace(/[^A-Z]/g, '').length)/str.length * 100).toFixed(2);
  let neitherPercent = (100 - lowerPercent - upperPercent).toFixed(2);
  
  let obj = {
    lowercase: lowerPercent.toString(),
    uppercase: upperPercent.toString(),
    neither: neitherPercent.toString(),
  };
  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }