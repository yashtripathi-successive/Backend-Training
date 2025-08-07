import {Request,Response, NextFunction } from "express";
import userSchema from "../validations/userValidation.js";



function validateUser(req:Request,res:Response,next:NextFunction){
    const {value,error} = userSchema.validate(req.body)

    if(error){
        return res.status(400).json({message: "error found"})
    }
    next()
}


export default validateUser
