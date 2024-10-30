var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c);
a = 15;
b = 25;
// c = 35; // TypeError: Assignment to constant variable
console.log(a, b, c);

const arr = [100, 200];
arr.push(300);  // can we push new values - Yes
console.log(arr);
// arr = [100, 200, 300, 400]; // can we assign a new array - No 
// TypeError: Assignment to constant variable

const user = { name: 'sachin', age: 40 };
user.add = 'mumbai'; // add new property - Yes
delete user.age; // yes
console.log(user);
user = { name: 'rahul' }; 