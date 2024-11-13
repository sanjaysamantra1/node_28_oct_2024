let arr1 = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];
console.log(arr1.length);

let res1 = arr1.flat();
console.log(res1, res1.length)

let res2 = arr1.flat(2); // flat , depth=2
console.log(res2, res2.length)

let res3 = arr1.flat(Infinity); // flat , depth=n
console.log(res3, res3.length)