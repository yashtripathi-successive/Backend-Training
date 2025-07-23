import { Request, Response } from "express"

class logIpClass{
public logIpFunction(req:Request,res:Response){
    res.status(201).json({message:"ip is valid"})
}
}
export default logIpClass