const http = require('http');
const users = require('../data/users.json')
const comments = require('../data/comments.json')

const server = http.createServer((req, res) => {
    if (req.url === '/users') {
        res.write(JSON.stringify(users));
    } else if (req.url === '/comments') {
        res.write(JSON.stringify(comments));
    } else {
        res.write('No Such page found!!!')
    }
    res.end();
});

server.listen(5000, () => {
    console.log(`Server Running at 5000 PORT`)
})