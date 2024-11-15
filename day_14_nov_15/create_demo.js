let obj1 = { a: 10, b: 20 };
let obj2 = Object.create(obj1); // obj1 is the prototype of obj2

console.log(obj1);
console.log(obj2); // {}
console.log(obj2.a, obj2.b); // 10 20

obj1.a = 15;
console.log(" obj1 ", obj1.a, obj1.b); // 15 20
console.log(" obj2 ", obj2.a, obj2.b); // 15 20

obj2.b = 25; // obj2 should have a prop 'b' with value 25
console.log(obj2)
console.log(" obj1 ", obj1.a, obj1.b); // 15 20
console.log(" obj2 ", obj2.a, obj2.b); // 15 25

// Note : if the same prop(direct) is present in the object, aswell as in prototype.
// direct property takes precedence