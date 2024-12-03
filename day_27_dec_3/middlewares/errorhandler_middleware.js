let myErrorHandler = (err, req, res, next) => {
    console.log('Error Handling Middleware called...')
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong, Try again!';

    res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
        success: false,
    });
};
module.exports = myErrorHandler;