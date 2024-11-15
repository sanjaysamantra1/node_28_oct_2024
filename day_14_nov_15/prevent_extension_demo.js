let obj1 = { a: 10, b: 20 };
obj1.a = 15;  // update value of a prop - yes
delete obj1.b; // delete a property - yes
obj1.c = 30; // add anew property - yes
console.log(obj1);

let obj2 = { a: 100, b: 200 };
Object.preventExtensions(obj2);
obj2.a = 150;  // update value of a prop - yes
delete obj2.b; // delete a property - yes
obj2.c = 300; // add anew property - no
console.log(obj2);

console.log(Object.isExtensible(obj1)); // false
console.log(Object.isExtensible(obj2)); // true