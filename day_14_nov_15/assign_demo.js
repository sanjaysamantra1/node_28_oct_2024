let obj1 = { a: 10, b: 20 };
let obj2 = { c: 30, d: 40 }
let obj3 = { e: 50 };

// Object.assign(target, source1, source2)
Object.assign(obj1, obj2, obj3);
console.log(obj1)