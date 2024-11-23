console.log('Regular code starts here...')

let f1 = () => {
    console.log('I am timeout.....')
}
let f2 = () => {
    console.log('I am immediate.....')
}
setTimeout(f1, 0);
setImmediate(f2);

Promise.resolve().then(()=>console.log('I am response from promise'))

console.log('Regular code ends here...')
