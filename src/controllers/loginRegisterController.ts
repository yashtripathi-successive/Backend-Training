import { Request, Response } from "express"

function loginRegisterController(req:Request,res:Response){
     res.status(201).json({message:"login register is working fine"})
}

export default loginRegisterController
