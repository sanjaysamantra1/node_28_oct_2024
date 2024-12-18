const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
app.use(fileUpload());
app.get('/', (req, res) => {
    res.send(`
        <form method='post' action='http://localhost:5000/upload' encType='multipart/form-data'>
            <input type='file' name='myFiles' multiple />
            <input type='submit' value='Upload!' />
        </form>
        `)
})
app.post('/upload', async (req, res) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No Files were uploaded');
    } else {
        myFiles = req.files.myFiles;
        console.log(myFiles)
        uploadPath = `${__dirname}/assets/${myFiles.name}`;

        myFiles.mv(uploadPath, (err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(`${myFiles.name} Uploaded Succesfully!!`)
            }
        })
    }
});
app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
});