const minimist = require('minimist');

let argsArr = process.argv.slice(2);
argObj = minimist(argsArr);
console.log(argObj.name , argObj.add)

// to run minimist file
// node file1.js --name=sanjay --add=bangalore
