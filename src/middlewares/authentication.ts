import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { secretKey } from "../app";

function authentication(req: Request, res: Response, next: NextFunction) {
  
  try{

  
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; 

  if (!token) return res.status(401).json({ message: "Token missing" });

  if(jwt.verify(token, secretKey)){
    
    next()
  }

  }catch(err){
    next(err)
  }
}


export default authentication