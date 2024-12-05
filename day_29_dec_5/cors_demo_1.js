const express = require('express');
const cors = require('cors');
let employees = require('../data/employees.json');
const app = express();

// cors middleware 
// app.use(cors());   // APIs are open for everyone
const corsOptions = {
    origin: 'https://www.w3schools.com'
}
app.use(cors(corsOptions));


// Get All Employees
app.get('/employees', (req, res) => {
    res.status(200).json(employees);
})
// Get Employee By Id (Path Param)
app.get('/employees/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        throw new Error('Employee id should be a number')
    } else {
        let employee = employees.find(emp => emp.id == req.params.id);
        res.status(200).json(employee);
    }
})
app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})