let str1 = 'hello';
let str2 = 'hello';

let str3 = new String('hello')
let str4 = new String('hello')

console.log(typeof str1); // string
console.log(typeof str3); // Object

console.log(str1 == str2); // true
console.log(str2 == str3); // true
console.log(str3 == str4); // false (address comparision)

let str5 = '2+3+4';
let str6 = new String('2+3+4');
let str7 = str6.valueOf(); // converts string object to literal
console.log(eval(str5));  // 9
console.log(eval(str6));
console.log(eval(str7));