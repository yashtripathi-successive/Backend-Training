import { NextFunction, Request, Response } from "express"


class asyncErrorClass{
public async asyncError(req:Request,res:Response,next:NextFunction){
  try{
     await new Promise((resolve,reject)=>{
        reject("intentional error")
     })
  }
  catch(err){

    next(err)
  }
}
}
export default asyncErrorClass