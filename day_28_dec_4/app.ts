const express = require('express');
let employees = require('../data/employees.json');
const app = express();
app.use(express.json()); // middleware

let myName: string = 'Sachin';
let cars: String[] = ['Tata', 'Honda', 'Maruti']

function add(a: number, b: number) {
    console.log(a + b);
}
// Get All Employees
app.get('/employees', (req: any, res: any) => {
    add(10, 20);
    res.status(200).json(employees);
})
app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})