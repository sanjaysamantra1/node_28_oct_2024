const fs = require('fs');

// Read a file
fs.readFile('./package.json', (err, data) => {
    if (err) throw err;
    console.log(data); // buffer data
    console.log(data.toString()); // string data
})
fs.readFile('./package.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data); 
})