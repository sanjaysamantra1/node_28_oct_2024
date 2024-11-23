const fs = require('fs');

fs.readFile('./day_20_notes.txt',(err,data)=>{
    let f1 = () => {
        console.log('I am timeout.....')
    }
    let f2 = () => {
        console.log('I am immediate.....')
    }
    setTimeout(f1, 0);
    setImmediate(f2);
})