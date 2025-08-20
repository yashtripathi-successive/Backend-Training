import Joi from 'joi'

const userSchema = Joi.object({
    name:Joi.string().pattern(new RegExp('^[a-zA-Z]{1,10}$')).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9@!#$]{4,10}$')).required()
})


export default userSchema