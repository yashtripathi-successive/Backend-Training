import { Request, Response } from "express"


interface MockUser {
  name: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      users?: MockUser[];
    }
  }
}

class mockApiDetailClass{
public mockApiDetail(req:Request,res:Response){
    res.status(201).json({message:"mock data",users:req.users})
}

}

export default mockApiDetailClass