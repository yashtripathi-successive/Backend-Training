function reqLogger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    console.log(`method is : ${method}, url is : ${url} and timestamp is : ${timestamp}`);
    next();
}
export default reqLogger;
//# sourceMappingURL=reqLogger.js.map