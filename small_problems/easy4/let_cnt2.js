
function wordSizes(str) {
  str = str.replace(/[^a-z\s]/gi, '');
  let arr = str.split(' ');
  console.log(str);
  let obj = {};
  
  for(x of arr) {
    if(obj.hasOwnProperty(x.length)) obj[x.length]++;
    else obj[x.length] = 1;
  }
  console.log(obj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}