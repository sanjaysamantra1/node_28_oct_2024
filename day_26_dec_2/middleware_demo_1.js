const express = require('express');
const app = express();

const logger = function(req,res,next){
    console.log(`Logger MIddleware ,  ${req.url} , ${req.method}`)
    next();
}
app.use(express.json()); // middleware
// app.use(logger); // logger middleware will be called for every route


app.get('/home', logger,(req, res) => {
    res.send('<h1>This is Home Route</h1>')
    console.log('Home ROute')
})
app.get('/about',logger, (req, res) => {
    res.send('<h1>This is About Route</h1>')
    console.log('About ROute')
})
app.get('/careers', (req, res) => {
    res.send('<h1>This is Careers Route</h1>')
    console.log('careers ROute')
})

app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})