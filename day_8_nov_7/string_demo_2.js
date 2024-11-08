let str1 = 'hello';

console.log(str1.length); // 5
console.log(str1.toUpperCase()); // HELLO
console.log(str1.toLowerCase()); // hello

console.log(str1.charAt(2)); // l
console.log(str1[2]); // l
console.log(str1.at(2)); // l

// at() works with -ve index also
console.log(str1.charAt(-1)); // 
console.log(str1[-1]); // undefined
console.log(str1.at(-1)); // o