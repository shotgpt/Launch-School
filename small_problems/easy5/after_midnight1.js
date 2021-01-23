function timeOfDay(num) {
  let hours = 0;
  let minutes = 0;
  
  if(Math.abs(num) > 1440) num = num % 1440;
  
  if(Math.sign(num) === -1) {
    hours = (1440 + num) / 60;
    minutes = (hours % 1) * 60;
  } else {
    hours = num / 60;
    minutes = (hours % 1) * 60;
  }
  return (`${printNum(Math.floor(hours))}:${printNum(minutes.toFixed(0))}`);
}

function printNum(num) {
  let str = num.toString();
  if(str.length < 2) {
    str = '0' + str;
  }
  return str
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");  //**
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");  //**