function validateQueryParameters(parameters = []) {
    return function (req, res, next) {
        for (const params of parameters) {
            const value = req.query[params];
            if (isNaN(Number(value))) {
                return res.status(400).json({ message: "parameters are string", query: req.query });
            }
        }
        next();
    };
}
export default validateQueryParameters;
//# sourceMappingURL=validateQueryParameters.js.map