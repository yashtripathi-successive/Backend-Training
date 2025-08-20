import { NextFunction, Request, Response } from "express";

interface reqData{
    email:string;
    password:string;
}

const users : { [email: string]: { password: string }} = {}
export function registerCodes(req:Request,res:Response,next:NextFunction){
    
    const {email,password} = req.body

    if (!email) {
      return res.status(400).json({
        message:"email is required"
      })
    } else if (!email.includes("@") || typeof email !== "string") {
      return res.status(400).json({
        message:"email is invalid"
      })
    } else if (users[email]) {
      return res.status(409).json({
        message:"email already exists"
      })
    }

    users[email] = {password}
    res.status(201).json({
        message:"user created successfully"
    })
}


export function loginCodes(req:Request,res:Response,next:NextFunction){
    const {email,password} = req.body

     if (!email) {
      return res.status(400).json({
        message:"email is required"
      })
     } else if (!users[email]) {
      return res.status(404).json({
        message:"user with this email does not exists"
      })
     }

  
     if (!password) {
      return res.status(400).json({
        message:"password is required"
      })
     } else if (users[email] && users[email].password !== password) {
       return res.status(401).json({
        message:"password is wrong"
      })
     }

    res.status(200).json({
        message:"user loggedin successfully"
    })

}

