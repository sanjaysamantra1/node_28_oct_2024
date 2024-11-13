let arr1 = [10, 20, [30, 31]];

// let arr2 = [...arr1]; // shallow copy (copy by value)
let arr2 = structuredClone(arr1); // deep copy (copy by value)
arr2.push(40);
arr2[2].push(32, 33);

console.log(arr1); // [ 10, 20, [ 30, 31, 32, 33 ] ]
console.log(arr2); // [ 10, 20, [ 30, 31, 32, 33 ], 40 ]
