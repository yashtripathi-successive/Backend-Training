import { Request, Response } from "express"


class validateDetailsClass{
public validateDetails(req:Request,res:Response){
   res.status(201).json({
      message:"all ok"
   })
}
}
export default validateDetailsClass
