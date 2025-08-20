import jwt from 'jsonwebtoken'
import secretKey from '../routes/authRoute.js'
import { NextFunction, Request, Response } from 'express';

interface MyJwtPayload {
  id: string;
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: MyJwtPayload; 
    }
  }
}


function verifyingAuth(req:Request,res:Response,next:NextFunction){
const secretKey = "yash"
const header = req.headers.authorization


if (!header || !header.startsWith("Bearer ")) {
    return res.status(400).json({ message: "Token missing or invalid format" });
}
const token = header.split(' ')[1]

if(!token){
  return res.status(400).json({message:"token missing"})
}

const data = jwt.verify(token,secretKey) as MyJwtPayload
console.log(`data is : ${data}`)
req.user = data
next()
}

export default verifyingAuth
