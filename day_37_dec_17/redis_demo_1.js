import express from 'express';
import axios from 'axios';
import { createClient } from 'redis';

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const app = express();

app.get('/fetchData', async (req, res) => {
    // let countryName = req.query.country;
    const url = `https://fakestoreapi.com/products`;

    const dataInRedis = await redisClient.get('products');

    if (dataInRedis) {
        console.log('Data Found in Redis');
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'Redis', output });
    } else {
        console.log('Data Not Found in Redis');

        let response = await axios.get(url);
        let output = response.data;

        // store the data in Redis
        await redisClient.set('products', JSON.stringify(output), { ex: 60 });
        res.send({ source: 'API', output });
    }
})


app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})