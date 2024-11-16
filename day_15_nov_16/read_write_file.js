const fs = require('fs');

fs.readFile('file1.txt', 'utf-8', (err, file1Data) => {
    if (err) {
        console.log(err);
    }
    console.log(file1Data);

    fs.readFile('file2.txt', 'utf-8', (err, file2Data) => {
        if (err) {
            console.log(err);
        }
        console.log(file2Data);;

        fs.writeFile('file3.txt', `${file1Data}\n${file2Data}`, 'utf-8', (err,data) => {
            if (err) {
                console.log(err);
            }
            console.log('data written succesfully');;
        })

    })
});