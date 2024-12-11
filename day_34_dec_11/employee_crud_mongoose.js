const express = require('express');
const mongoose = require('mongoose');
const employeeModel = require('./employee_schema');

const app = express();
app.use(express.json()); // middleware

async function connectToDB() {
    // Use connect method to connect to the server
    await mongoose.connect('mongodb://127.0.0.1:27017/oct_2024')
    console.log('Connected successfully to mongodb server');
}

// Get All Employees
app.get('/employees', async (req, res) => {
    try {
        let allEmployees = await employeeModel.find();
        res.status(200).json(allEmployees);
    } catch (err) {
        res.send(err);
    }
})

// Get Employee By Id (Path Param)
app.get('/employees/:id', async (req, res) => {
    try {
        let employee = await employeeModel.findById(req.params.id);
        res.status(200).json(employee);
    } catch (err) {
        res.send(err);
    }
})

// Get Employee By name (Query Param)
app.get('/employeesByName', async (req, res) => {
    try {
        let employee = await employeeModel.findOne({ name: req.query.name });
        res.status(200).json(employee);
    } catch (err) {
        res.send(err);
    }
})

// Add a new Employee
app.post('/employees', async (req, res) => {
    try {
        const empToSave = new employeeModel(req.body);
        await empToSave.save();
        res.status(201).json(req.body);
    } catch (err) {
        res.send(err);
    }
})

// Update Employee Data
app.patch('/employees/:id', async (req, res) => {
    try {
        const empToSave = new employeeModel(req.body);
        await empToSave.save();
        res.status(201).json(req.body);
    } catch (err) {
        res.send(err);
    }
});

// Delete Employee
app.delete('/employees/:id', (req, res) => {
    let empId = req.params.id;
    let empIndexToDel = employees.findIndex(emp => emp.id == empId);
    let empToDelete = employees.splice(empIndexToDel, 1);
    res.status(200).json(empToDelete);
});

//Page Not Found
app.get('**', (req, res) => {
    res.status(200).send('<h1>404 , Page Not Found</h1>')
});

app.listen(5000, async () => {
    await connectToDB();
    console.log(`Server Running at 5000 port`)
})