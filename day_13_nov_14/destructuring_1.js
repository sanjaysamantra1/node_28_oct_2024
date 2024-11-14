let user = { name: 'sanjay', age: 50, add: 'bangalore', phone: 123456 };

let a = user.name;
let b = user.age; // Es-5
let c = user.add;
console.log(a, b, c);

let { name, age, add, phone } = user; // es-6 object destructuring
console.log(name, age, add, phone);

let { p, q, r } = user;
console.log(p, q, r);

let { name: x, age: y, add: z } = user;
console.log(x,y,z)
