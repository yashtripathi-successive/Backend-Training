import validationConfig from "../config/validationConfig";
function validateRouteBasedDetails(req, res, next) {
    const path = req.route.path;
    const schema = validationConfig[path];
    if (!schema) {
        return res.status(400).json({ message: "route is invalid" });
    }
    const { value, error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "data is in invalid form" });
    }
    next();
}
export default validateRouteBasedDetails;
//# sourceMappingURL=validateRouteBasedDetails.js.map