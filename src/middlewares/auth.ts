import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface UserData {
  name: string;
  age: number;
}

function auth(req:Request,res:Response,next:NextFunction){
      const userData :UserData = { name: "yash", age: 21 }
      const secretKey :string = "yash"
      const token = jwt.sign(userData,secretKey)
      console.log(`token is : ${token}`)
      res.status(201).json({token})
      
}

export default auth
