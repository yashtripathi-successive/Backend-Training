import { NextFunction, Request, Response } from "express";
import validationConfig from "../config/validationConfig";

function validateRouteBasedDetails(req:Request,res:Response,next:NextFunction){
    const path:string=req.route.path;
    const schema = validationConfig[path]

    if(!schema){
        return res.status(400).json({message:"route is invalid"})
    }

    const {value,error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({message:"data is in invalid form"})
    }

    next()


}


export default validateRouteBasedDetails
