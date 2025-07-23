import { NextFunction, Request, Response } from "express"

function globalErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    res.status(500).json({
        message:err
    })
}
export default globalErrorHandler