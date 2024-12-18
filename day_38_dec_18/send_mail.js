const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/sendMail', async (req, res) => {
    // create transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "sanjaysamantra2@gmail.com",
            pass: "oiug hmtp wwiw csbq",
        }
    });

    let mailInfo = {
        from: 'sanjaysamantra2@gmail.com', // sender address
        to: "pathan.mohsin73@gmail.com,vikashchoudhary798@gmail.com", // list of receivers
        subject: "Test Email Using Node-Mailer", // Subject line
        html: `
            <h1>This is a Test mail</h1>
            <h3 style='color:red;text-align:center'>Congratulations!!<h3>
            <p>Please follow the below instructions to redeem the amount</p>
            <pre>
                Hellooooo
                Hiiiiiiiiiiiiii
                Good Morning
            </pre>
        `, // html body
    }
    try {
        await transporter.sendMail(mailInfo);
        res.send('Email Sent Succesfully')
    } catch (err) {
        res.send(err)
    }
});

app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
});