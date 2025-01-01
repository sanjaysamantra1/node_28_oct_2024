const fs = require('fs');

fs.readFile('file_1.txt', (err, data) => {
    console.log(data)
})