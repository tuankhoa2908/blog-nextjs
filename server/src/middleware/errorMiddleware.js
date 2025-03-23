const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    const statusCode = res.statusCode < 400 ? 500 : res.statusCode; // Nếu statusCode < 400 thì đặt là 500
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
    });
}

module.exports = { errorHandler };