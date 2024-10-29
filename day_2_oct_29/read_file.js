const fs = require('fs');

fs.readFile('./day_2_notes.txt',(err,data)=>{
    console.log(data.toString())
});

// this code runs fine in nodejs, but not in browser