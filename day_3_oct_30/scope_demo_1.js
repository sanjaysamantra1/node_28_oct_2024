var a = 10; // global
console.log('global a ', a);

function test() {
    var a = 100;
    var b = 200; // function scoped , wont be visible outside the function
    console.log('function a,b ', a, b);
}
test();

// console.log('outside function ', b); //ReferenceError: b is not defined

// var works fine when used in global scope & function scope