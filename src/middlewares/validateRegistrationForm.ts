import { NextFunction, Request, Response } from "express"
import userSchema from "../validations/userSchema"

function validateRegistrationForm(req:Request,res:Response,next:NextFunction){
    const {value,error} = userSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            message:"validation failed for registration form"
        })
    }
    next()
}


export default validateRegistrationForm




 