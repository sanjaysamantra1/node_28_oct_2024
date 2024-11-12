let arr = [10, 20, 30, 40, 50];

// array.splice( index , #elements to remove , elements to insert )

// only delete
arr.splice(1, 2);
console.log(arr); // [10,  40, 50];

// only insert
arr.splice(1, 0, 20, 30);
console.log(arr); // [10, 20,30 40, 50];

// both insert & delete
arr.splice(1, 2, 25, 35);
console.log(arr); // [10, 25,35 40, 50];


let cars = ['tata', 'honda', 'maruti', 'hundai'];
let cars2 = cars.toSpliced(1, 2, 'mahindra');
console.log(cars)
console.log(cars2)