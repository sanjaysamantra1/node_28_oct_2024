const fs = require('fs');

function traverseDirectory(directory) {
    fs.readdir(directory, { withFileTypes: true }, (err, files) => {
        files?.forEach(ele => {
            if (ele.isDirectory()) {
                console.log(`📁 ${ele.name}`);
                traverseDirectory(`${ele.path}/${ele.name}`);
            } else {
                console.log(`📄 ${ele.name}`)
            }
        })
    })
}

traverseDirectory('./');
