var a = 10;
let b = 20;
const c = 30;  // global
console.log(a, b, c);

var a = 100;
// let b = 200;    // SyntaxError: Identifier 'b' has already been declared
// const c = 300;  // SyntaxError: Identifier 'b' has already been declared
console.log(a, b, c);

function test() {
    let b = 200;
    let c = 300;
    console.log('inside test function  ', b, c);
    if (true) {
        let b = 2000;
        let c = 3000;
        console.log('inside if block  ', b, c);
    }
}
test();


