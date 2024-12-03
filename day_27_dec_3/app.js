const express = require('express');
const cors = require('cors');
const employeeRouter = require('./routes/employee_routes');
const productRouter = require('./routes/product_routes');
const logger = require('./middlewares/logger_middleware');
const myErrorHandler = require('./middlewares/errorhandler_middleware');
const app = express();
app.use(express.json()); // middleware
app.use(cors()); // middleware
// app.use(logger); // middleware

app.use('/employees', employeeRouter);
app.use('/products', productRouter);

app.use(myErrorHandler); //Error Handling middleware
app.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
})