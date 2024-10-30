function varTest() {
    if (true) {
        var a = 10; // ideally it should be visible only inside the block
        console.log('inside block ', a); // a = 10
    }
    console.log('outside block ', a); // a = 10
}
varTest();
// can we access a var variable outside the block, when that is declared inside the block - yes
// we cann't restrict the scope of a var avariable to a block, even though a var is declared inside blck
// its scope becomes function 

function letTest() {
    if (true) {
        let x = 100; // only visible inside the block
        console.log('inside block ', x); // x = 100
    }
    console.log('outside block ', x); // ReferenceError: x is not defined
}
letTest();