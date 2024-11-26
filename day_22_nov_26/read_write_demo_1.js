const { readFileSync, writeFileSync } = require('fs');

try {
    let data1 = readFileSync('file_1.txt', 'utf-8')
    let data2 = readFileSync('file_2.txt', 'utf-8')
    writeFileSync('file_3.txt', `${data1}\n${data2}`)
} catch (err) {
    console.log('something went wrong')
}