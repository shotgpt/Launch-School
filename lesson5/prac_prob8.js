let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a','e','i','o','u'];

let arr = Object.values(obj);

arr.forEach(arr => {
  arr.forEach(word => {
    for(let i = 0; i < word.length; i++) {
      if(vowels.includes(word[i])){
        console.log(word[i]);
      }
    }
  })
})