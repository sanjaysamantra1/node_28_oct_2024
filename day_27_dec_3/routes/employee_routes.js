const express = require('express');
const {getAllEmployees, getEMployeeById, createEmployee} = require('../controllers/employee_controller')

const employeeRouter = express.Router();

employeeRouter.get('/', getAllEmployees);
employeeRouter.get('/:id', getEMployeeById);
employeeRouter.post('/', createEmployee);

module.exports = employeeRouter;