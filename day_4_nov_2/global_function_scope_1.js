var a = 10;
let b = 20;
const c = 30;   // global

function f1(){
    var d = 40; // Function scoped
    e = 50; // global 
    console.log('f1 starts here...')
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d); //  Yes
    console.log(e); //  Yes
    console.log('f1 ends here...')
}
function f2(){
    console.log('f2 starts here...')
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(e);  // yes
    // console.log(d);  // No  console.log(d);
    console.log('f2 ends here...')
}
f1();
f2();
// NOte : The variables declared without var/let/const are always global variables, no matter where that is declared