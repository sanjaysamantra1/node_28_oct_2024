let arr1 = [10, 20];

let arr2 = arr1;   // reference copy (Copy by Address)
arr2.push(30);
console.log(arr1, arr2);

let arr3 = [...arr2]; // value copy (shallow copy)
arr3.push(40);
console.log(arr2, arr3)


