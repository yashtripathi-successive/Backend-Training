import express, { Request, Response } from "express"
import Joi from 'joi'

const app = express()

app.use(express.json())

const validateRegistrationFormData = Joi.object({
    name:Joi.string().pattern(new RegExp('^[a-zA-Z]{1,10}$')).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9@!#$]{4,10}$')).required()
})


app.post('/validateregistrationformdata',(req:Request,res:Response)=>{
    const {value,error} = validateRegistrationFormData.validate(req.body)

    if(error){
        return res.status(400).json({
            message:"validation failed for registration form"
        })
    }

    res.status(201).json({
        message:"validation done successfully",
        user:value
    })
})

app.listen(5000,()=>{
    console.log('server active at port : 5000')
})