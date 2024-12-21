const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname,"public")));

io.on('connection', socket => {
    console.log('A New Client Joined...');

    socket.on('setName', (name) => {
        socket.userName = name;
    })
    socket.on('chat', (data) => {
        let msgObj = { 
            message: data.message, 
            userName: socket.userName, 
            time: new Date().toLocaleTimeString() 
        }
        io.emit('chat', msgObj);
    })
});
server.listen(5000, () => { console.log('server Running at 5000') });