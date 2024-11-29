const express = require('express');
const users = require('../data/users.json')
const employees = require('../data/employees.json')
const comments = require('../data/comments.json')
const app = express();

app.get('/users', (req, res) => {
    res.json(users);
})
app.get('/employees', (req, res) => {
    res.json(employees);
})
app.get('/comments', (req, res) => {
    res.json(comments);
})

app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})
