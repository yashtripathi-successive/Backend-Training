import { Request, Response } from "express"

function validateDetails(req:Request,res:Response){
   res.status(201).json({
      message:"all ok"
   })
}
export default validateDetails
