import Joi from 'joi'

const userSchema = Joi.object({
    username : Joi.string().min(4).max(8).required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(4).max(8).required()
})


export default userSchema
