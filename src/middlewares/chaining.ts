import { NextFunction, Request, Response } from "express"

export function middleware1(req:Request,res:Response,next:NextFunction){
    
    try{
    console.log("middleware 1 envoked")
    
    next()
    }
    catch(err){
         next(err)
    }
    
}

export function middleware2(req:Request,res:Response,next:NextFunction){
    
    try{
    console.log("middleware 2 envoked")
    
    next()
    }
    catch(err){
         next(err)
    }
    
}


