const express = require('express');
const winston = require('winston');
let employees = require('../data/employees.json');
const app = express();

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info', // Log level: 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(), // Log to the console
        new winston.transports.File({ filename: 'app.log' }) // Log to a file
    ]
});

app.use(express.json()); // middleware

// Middleware to log each request
app.use((req, res, next) => {
    logger.info(`HTTP ${req.method} ${req.url}`);
    next();
});



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
// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).send('Something went wrong!');
});

app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})