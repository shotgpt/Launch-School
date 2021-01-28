function afterMidnight(str) {
  
  if(str === '24:00' || 
    str === '00:00') return 0;
  
  let arr = str.split(':').map(str => {
    return parseInt(str);
  });
  let minutes = arr[0] * 60 + arr[1];
  return minutes;
  
}

function beforeMidnight(str) {
  const MINUTES_IN_A_DAY = 1440;
    
  if(str === '24:00' || 
    str === '00:00') return 0;
  
  let arr = str.split(':').map(str => {
    return parseInt(str);
  });
  let minutes = MINUTES_IN_A_DAY - (arr[0] * 60 + arr[1]);
  return minutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);