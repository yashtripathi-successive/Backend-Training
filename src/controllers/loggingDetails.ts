import { Request, Response } from "express"

function loggingDetails(req:Request,res:Response){
console.log(req.headers)
res.status(201).json({message:"details are verified through jwt",user:req.user})
}

export default loggingDetails
