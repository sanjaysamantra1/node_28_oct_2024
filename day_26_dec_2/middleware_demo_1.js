const express = require('express');
const app = express();

const logger = function(req,res,next){
    console.log(`Logger MIddleware `)
    // console.log(`Logger MIddleware ,  ${res} `)
    next();
}
const modifyResponse = (req, res, next) => {
    console.log(' modifyResponse middleware called')
    next();
  };
app.use(express.json()); // middleware
app.use(logger); // logger middleware will be called for every route
app.use(modifyResponse); // logger middleware will be called for every route


app.get('/home',(req, res) => {
    console.log({msg:'home page'})
    res.send('<h1>This is Home Route</h1>')
})
app.get('/about', (req, res) => {
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