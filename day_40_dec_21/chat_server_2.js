const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname,"public")));

const activeUsers = new Set();

io.on('connection', socket => {
    console.log('A New Client Joined...');

    socket.on('new user', (userId) => {
        socket.userId = userId;
        activeUsers.add(userId);
        io.emit('new user', [...activeUsers])
    });
    socket.on('disconnect', () => {
        activeUsers.delete(socket.userId);
        io.emit('user disconnected', socket.userId);
    });
    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });
    socket.on('typing', (data) => {
        // io.emit('typing', data);
        socket.broadcast.emit('typing', data)
    }); 
});
server.listen(5000, () => { console.log('server Running at 5000') });