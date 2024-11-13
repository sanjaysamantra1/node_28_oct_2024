let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce((sum, ele) => {
    console.log(sum,ele)
    return sum + ele;
});
console.log(sum)