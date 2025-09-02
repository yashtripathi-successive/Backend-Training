<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 40113ce349764edcfe1e963881feb800d1118773
import { NextFunction } from "connect";
import { Request, Response } from "express";


function globalErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    res.status(404).json({
        message:err.message
    })



}

<<<<<<< HEAD
=======
=======
import { NextFunction, Request, Response } from "express"

function globalErrorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    res.status(500).json({
        message:err
    })
}
>>>>>>> df97738ec1c2e058f985e2b9f3754d459af90af9
>>>>>>> 40113ce349764edcfe1e963881feb800d1118773
export default globalErrorHandler