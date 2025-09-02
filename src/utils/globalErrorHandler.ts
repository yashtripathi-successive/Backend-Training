<<<<<<< HEAD
import { NextFunction } from "connect";
import { Request, Response } from "express";


function globalErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    res.status(404).json({
        message:err.message
    })



}

=======
import { NextFunction, Request, Response } from "express"

function globalErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    res.status(500).json({
        message:err
    })
}
>>>>>>> df97738ec1c2e058f985e2b9f3754d459af90af9
export default globalErrorHandler