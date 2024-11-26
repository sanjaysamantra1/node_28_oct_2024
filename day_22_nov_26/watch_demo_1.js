const fs = require('fs');

fs.watch('./file_4.txt', (eventType, fileName) => {
    console.log(`${eventType} operation done with ${fileName}`)
})