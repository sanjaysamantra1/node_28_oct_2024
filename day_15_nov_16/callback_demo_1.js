let arr = [10, 20, 30, 40, 50];

function incrementBy5(ele, ind, arr) { // callback function
    return ele + 5;
}
let resArr = arr.map(incrementBy5); // map() - HigherOrder , incrementBy5() - callBack
console.log(resArr);

// find the sum of all the numbers
let sum = arr.reduce((sum,ele)=>sum+ele); // reduce()-HigherOrder , arrow function is the Callback
console.log(sum);
