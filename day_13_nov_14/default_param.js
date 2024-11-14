function add(a, b, c) {
    a = a | 0;
    b = b | 0;
    c = c | 0;
    console.log(a + b + c); // 2+3+undefined
}
add(2, 3);

function sum(a = 0, b = 0, c = 0) { // Default parameter value
    console.log(a + b + c)
}
sum(2, 3)