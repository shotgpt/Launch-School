
function wordSizes(str) {
  let arr = str.split(' ');
  console.log(str);
  let obj = {};
  
  for(x of arr) {
    if(obj.hasOwnProperty(x.length)) obj[x.length]++;
    else obj[x.length] = 1;
  }
  console.log(obj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}