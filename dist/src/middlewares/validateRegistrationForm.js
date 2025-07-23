import registrationFormSchema from "../validations/registrationFormSchema.js";
function validateRegistrationForm(req, res, next) {
    const { value, error } = registrationFormSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "error found" });
    }
    next();
}
export default validateRegistrationForm;
//# sourceMappingURL=validateRegistrationForm.js.map