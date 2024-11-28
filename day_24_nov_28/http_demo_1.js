const http = require('http');

let server = http.createServer((req, res) => {
    // req : to read client sent data
    // res : to send some data to client
    res.write('<h1>This is Response From Server');
    res.end();
});

server.listen(5000, () => {
    console.log(`Server Running at 5000 PORT`)
})