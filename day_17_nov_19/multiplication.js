let args = process.argv.slice(2);
let [num1, num2] = args;

function mul(a, b) {
    console.log(`mul of ${a} and ${b} is ${a * b}`);
}
mul(num1, num2);