let str = 'rain in the spain mAinly stays in the plain';
let res1 = str.match(/ain/gi);
console.log(res1);

let str2 = 'Ram and hari are 2 friends, ram is 14 & hari is 15';
let res2 = str2.match(/[0-9]{1,2}/g);
console.log(res2)

// let str = 'AB&%$CDEF#$GH'
// Output = 'ABCDEFGH%$#$'