import { Request, Response } from "express"

function writeQueryParameters(req:Request,res:Response){
    res.status(201).json({message:"parameters are numeric",query:req.query})
}

export default writeQueryParameters
