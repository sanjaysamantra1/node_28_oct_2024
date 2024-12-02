const express = require('express');
let employees = require('../data/employees.json');

const app = express();
app.use(express.json()); // middleware

// Get All Employees
app.get('/employees', (req, res) => {
    res.status(200).json(employees);
})

// Get Employee By Id (Path Param)
app.get('/employees/:id([0-9])', (req, res) => {
    let employee = employees.find(emp => emp.id == req.params.id);
    res.status(200).json(employee);
})

// Get Employee By name (Query Param)
app.get('/employeesByName', (req, res) => {
    let filteredEmployees = employees.filter(emp => emp.name == req.query.name);
    res.status(200).json(filteredEmployees);
})

// Add a new Employee
app.post('/employees', (req, res) => {
    const empToInsert = req.body;
    employees.push(empToInsert);
    res.status(201).json(empToInsert);
})

// Update Employee Data
app.patch('/employees/:id', (req, res) => {
    let empId = req.params.id;
    let dataToUpdate = req.body;
    let updatedData;
    employees = employees.map(emp => {
        if (emp.id == empId) { // for matched record, update the emp
            updatedData = { ...emp, ...dataToUpdate };
            return updatedData;
        } else { // otherwise return the emp as it is
            return emp;
        }
    })
    res.status(200).json(updatedData);
});

// Delete Employee
app.delete('/employees/:id', (req, res) => {
    let empId = req.params.id;
    let empIndexToDel = employees.findIndex(emp => emp.id == empId);
    let empToDelete = employees.splice(empIndexToDel,1);
    res.status(200).json(empToDelete);
});

//Page Not Found
app.get('**', (req, res) => {
    res.status(200).send('<h1>404 , Page Not Found</h1>')
});

app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})