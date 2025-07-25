import { Request, Response } from "express"

class submitDataClass{
public submitData(req:Request,res:Response){
    res.status(201).json({message:"form submitted successfully", data:req.body})
}
}
export default submitDataClass