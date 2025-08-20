import { NextFunction, Request, Response } from "express"


function writeRequestObject(req:Request,res:Response,next:NextFunction){
    const timestamp = new Date().toString()
    console.log(`${req.method}, ${req.url}, ${timestamp}`)
    
    next()
    
}


export default writeRequestObject



