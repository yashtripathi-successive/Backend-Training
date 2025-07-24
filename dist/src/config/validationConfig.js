import registrationFormSchema from "../validations/registrationFormSchema";
import userSchema from "../validations/userValidation";
const validationConfig = {
    "/api/user/register": userSchema,
    "api/user/registrationform": registrationFormSchema
};
export default validationConfig;
//# sourceMappingURL=validationConfig.js.map