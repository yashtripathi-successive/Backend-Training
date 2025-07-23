import { NextFunction, Request, Response } from "express"
import registrationFormSchema from "../validations/registrationFormSchema.js"


function validateRegistrationForm(req:Request,res:Response,next:NextFunction){
    const {value,error} = registrationFormSchema.validate(req.body)
    if(error){
        return res.status(400).json({message:"error found"})
    }
    next()
}

export default validateRegistrationForm