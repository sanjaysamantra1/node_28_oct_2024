let args = process.argv.slice(2);

let obj = {};
for(arg of args){
    let [key,value] = arg.split('=');
    obj[key] = value;
}
console.log(args);
console.log(obj);
console.log('hiii-2')