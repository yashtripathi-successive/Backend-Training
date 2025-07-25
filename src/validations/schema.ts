import Joi from 'joi'

const schema = {
    "/userdetails":Joi.object({
        username:Joi.string().required(),
        email:Joi.string().email().required()
    }),

    "/productdetails" : Joi.object({
        productid:Joi.number().required(),
        productdetail:Joi.string().required()
    })
}


export default schema;