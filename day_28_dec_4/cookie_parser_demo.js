const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser()); // middleware

app.get('/setCookie', (req, res) => {
    res.cookie('name', 'sanjay')
    res.cookie('add', 'bangalore')
    res.cookie('age', '50')
    res.send('<h1>3 cookies got saved in your browser</h1>')
})
app.get('/getCookie', (req, res) => {
    console.log(req.cookies)
    res.send('<h1>Hey, I am able to read cookie data from your cookie</h1>')
})

app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})