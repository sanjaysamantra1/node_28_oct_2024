// CommonJS 
let a = 100;
let b = 200;

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

module.exports = {
    a,
    add,
    mul
}