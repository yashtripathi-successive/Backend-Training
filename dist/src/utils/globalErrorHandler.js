function globalErrorHandler(err, req, res, next) {
    res.status(500).json({
        message: err
    });
}
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map