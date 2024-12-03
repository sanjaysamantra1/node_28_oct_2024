const express = require('express');
const {getAllEmployees, getEMployeeById, createEmployee} = require('../controllers/employee_controller');
const logger = require('../middlewares/logger_middleware');

const employeeRouter = express.Router();
employeeRouter.use(logger);

employeeRouter.get('/', getAllEmployees);
employeeRouter.get('/:id', getEMployeeById);
employeeRouter.post('/', createEmployee);

module.exports = employeeRouter;