import express, { Request,Response } from "express"

import Joi from 'joi'
const app = express()

app.use(express.json())
const validateMockData = Joi.object({
    id:Joi.number().required(),
    name:Joi.string().min(4).max(8).required(),
    gender:Joi.string().min(4).max(6).required(),
    city:Joi.string().required()
})

app.post('/validatemockdata',(req:Request,res:Response)=>{
   const {value,error} = validateMockData.validate(req.body)
    if(error){
     return res.status(400).json({
            message: "Validation failed",
        });
    }
    res.status(201).json({
    message:"validation is done successfully",
    user:value
   })
})

app.listen(4000,()=>{
    console.log('server active at port 4000')
})