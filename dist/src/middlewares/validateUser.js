import userSchema from "../validations/userValidation.js";
function validateUser(req, res, next) {
    const { value, error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "error found" });
    }
    next();
}
export default validateUser;
//# sourceMappingURL=validateUser.js.map