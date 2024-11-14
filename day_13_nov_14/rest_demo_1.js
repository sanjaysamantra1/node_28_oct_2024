function add(a, b) {
    console.log(a + b);
}
add(2, 3);

function sum(a, b, c) {
    console.log(a + b + c);
}
sum(2, 3, 4);

// write a common function that should be able to add 2/3/4/5/6/7/8/9/10 params
function addition(...args) { // rest param , args = []
    let sum = 0;
    for (ele of args) {
        sum = sum + ele;
    }
    console.log(sum)
}
addition(2, 3, 4, 5, 6)
addition(2, 3)