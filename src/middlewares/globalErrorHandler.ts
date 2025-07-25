import { NextFunction, Request, Response } from "express"

function globalErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    console.log(err.message)
    res.status(400).json({
        message:err.message
    })
}


export default globalErrorHandler