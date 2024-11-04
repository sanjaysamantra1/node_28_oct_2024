// 1. Function Declaration
function add(a, b) {
    console.log(`Addition of ${a} & ${b} is ${a + b}`);
}
add(2, 3);
add(4, 5);

// 2. Function Expression (anonymous function)
var sub = function (a, b) {
    console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
}
sub(20, 10);


// 3. self invoked (IIFE)
(function (a, b) {
    console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
})(4, 5);


// 4. Arrow Function
var div = (a, b) => {
    console.log(`Division of ${a} & ${b} is ${a / b}`);
}
div(20, 10);
