import { NextFunction, Request,Response } from "express"
import userSchema from "../validations/userSchema";

function validateMockData(req:Request,res:Response,next:NextFunction){
   const {value,error} = userSchema.validate(req.body)
    if(error){
     return res.status(400).json({
            message: "Validation failed",
        });
    }
    next()
}


export default validateMockData

