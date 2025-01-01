const fs = require('fs');

const readStream = fs.createReadStream('../nodejs_notes.txt', 'utf-8');

readStream.on('data', (chunk) => {
    console.log('received chunk data', chunk);
});
readStream.on('end', () => {
    console.log('received all the chunks');
});
readStream.on('error', (err) => {
    console.log('error ', err);
});