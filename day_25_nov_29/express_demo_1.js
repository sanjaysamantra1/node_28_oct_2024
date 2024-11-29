const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>This is Home Page</h1>')
})
server.get('/employees', (req, res) => {
    res.send('<h1>This is Employees Page</h1>')
})
server.get('/products', (req, res) => {
    res.send('<h1>This is Products Page</h1>')
})
server.get('/orders', (req, res) => {
    res.send('<h1>This is Orders Page</h1>')
})

server.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})