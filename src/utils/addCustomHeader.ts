import { NextFunction, Request, Response } from "express"

function addCustomHeader(developedby:string,name:string){
    return (req:Request,res:Response,next:NextFunction)=>{
    res.setHeader(developedby,name)
 
    next()
    }
}
export default addCustomHeader