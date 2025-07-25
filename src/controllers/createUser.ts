import { Request, Response } from "express"

class createUserClass{
public createUser(req:Request,res:Response){
    
     res.status(201).json({message: "user created successfully" , data:req.body})
    
}

}

export default createUserClass