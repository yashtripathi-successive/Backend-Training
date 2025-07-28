import { NextFunction } from "connect";
import { Request, Response } from "express";


function globalErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    res.status(404).json({
        message:err.message
    })



}

export default globalErrorHandler