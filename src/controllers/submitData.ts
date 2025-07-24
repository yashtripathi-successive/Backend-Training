import { Request, Response } from "express"

function submitData(req:Request,res:Response){
    res.status(201).json({message:"form submitted successfully", data:req.body})
}

export default submitData