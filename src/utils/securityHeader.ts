import { NextFunction, Request, Response } from "express";


class securityHeaderClass{
public securityHeader(req:Request,res:Response,next:NextFunction){
     
      res.setHeader('X-Developed-By', 'Yash-Tripathi'); 
      res.setHeader('Referrer-Policy', 'no-referrer');
      res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
      next();
}
}


export default securityHeaderClass