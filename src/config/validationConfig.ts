import registrationFormSchema from "../validations/registrationFormSchema";
import userSchema from "../validations/userValidation";
import Joi from "joi"
interface IValidationSchema{
    [key:string]:Joi.ObjectSchema
}

const validationConfig:IValidationSchema = {
    "/api/user/register" : userSchema,
    "api/user/registrationform": registrationFormSchema
}

export default validationConfig