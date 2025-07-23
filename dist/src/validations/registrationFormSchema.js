import Joi from 'joi';
const registrationFormSchema = Joi.object({
    username: Joi.string().min(4).max(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(8).required()
});
export default registrationFormSchema;
//# sourceMappingURL=registrationFormSchema.js.map