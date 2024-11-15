// REST param
function addition(...args) { 
    let sum = 0;
    for (ele of args) {
        sum = sum + ele;
    }
    console.log(sum)
}
addition(2, 3, 4, 5, 6)
addition(2, 3);


let arr1 = [10,20,30];
let arr2 = [...arr1]; // spread operator

