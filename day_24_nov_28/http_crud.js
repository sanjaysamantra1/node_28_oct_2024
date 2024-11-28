const http = require('http');
const employees = require('../data/employees.json')

/* 
C - Create
R - Read
U - Update
D - Delete
*/
const server = http.createServer((req, res) => {
    const { url, method, body } = req;
    const empId = url.split('/').pop();
    if (url === '/employees' && method === 'GET') {
        res.write(JSON.stringify(employees))
    } else if (url.includes('/employees') && method === 'GET' && empId) {
        let employee = employees.find(emp => emp.eId === +empId);
        res.write(JSON.stringify(employee))
    } else if (url.includes('/employees') && method === 'POST') {
        let payload;
        req.on('data', (chunk) => {
            payload += chunk.toString(); // Append chunk to body
        });
        req.on('end', () => {
            console.log('Received payload:', payload);
            if (payload) {
                employees.push(JSON.parse(payload));
                res.write('<h2>Employee data added succesfully!!!')
            }
        });
    }
    res.end();
});

server.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})