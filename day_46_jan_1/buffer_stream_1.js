const fs = require('fs');

const readableStream = fs.createReadStream('../nodejs_notes.txt');
const writableStream = fs.createWriteStream('../nodejs_notes_2.txt');

readableStream.on('data', (chunk) => {
    console.log('received chunk data');
    writableStream.write(chunk)
});