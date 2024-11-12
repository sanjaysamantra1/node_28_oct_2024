let cars = ['tata', 'honda', 'maruti', 'hundai'];

// 1. loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('=======================')

// for-in  ES-6 (2015)
for (i in cars) {
    console.log(cars[i]);
}
console.log('=======================')

// for-of  ES-6 (2015)
for (car of cars) {
    console.log(car)
}
console.log('=======================')
// forEach(callBack)
cars.forEach((val, ind, arr) => {
    console.log(val, ind, arr);
})