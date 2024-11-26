const fs = require('fs');

// error first callback
fs.stat('file_1.txt', (err, data) => {
    console.log(data)
})

// rename
fs.rename('file_3.txt', 'file_4.txt',(err, data) => {
    if(err){
        throw err;
        return;
    }
    console.log('file renamed')
})