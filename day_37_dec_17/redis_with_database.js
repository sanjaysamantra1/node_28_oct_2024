import express from 'express';
import axios from 'axios';
import { createClient } from 'redis';

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const app = express();

app.get('/employees', async (req, res) => {

})
app.get('/employees/:id', async (req, res) => {
    let empId = req.params.id;
    const dataInRedis = await redisClient.get(empId);
    if (dataInRedis) {
        console.log('Data Found in Redis');
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'Redis', output });
    } else {
        let employee = await EmployeeModel.findById(empId);
        await redisClient.set(empId , employee , {ex:2*60})
    }
})


app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})