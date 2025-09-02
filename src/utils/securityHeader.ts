import { NextFunction, Request, Response } from "express";


class securityHeaderClass{
public securityHeader(req:Request,res:Response,next:NextFunction){
     
      res.setHeader('X-Developed-By', 'Yash-Tripathi'); 
      next();
}
}


export default securityHeaderClass