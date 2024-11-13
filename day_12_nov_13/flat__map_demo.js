let arr = ['this is javascript session', 'this is array class'];

let res1 = arr.map(sentence => sentence.split(' '));
console.log(res1);

let res2 = arr.flatMap(sentence => sentence.split(' '));
console.log(res2);