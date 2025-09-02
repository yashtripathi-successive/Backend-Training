import { NextFunction, Request, Response } from "express";

interface reqData{
    email:string;
    password:string;
}

const users : { [email: string]: { password: string }} = {}
export function register(req:Request,res:Response,next:NextFunction){
    const errorsRegister : Partial<reqData> = {}

  
    const {email,password} = req.body

    if (!email) {
      errorsRegister.email = "email is required";
    } else if (!email.includes("@") || typeof email !== "string") {
      errorsRegister.email = "email must be a valid email address";
    } else if (users[email]) {
      errorsRegister.email = "email already exists";
    }


    if(Object.keys(errorsRegister).length > 0){
        res.status(400).json({
            message:"Errors found",
            errorsRegister
        })
        
    }
    users[email] = {password}
    res.status(201).json({
        message:"user created successfully"
    })
}



export function login(req:Request,res:Response,next:NextFunction){
    const {email,password} = req.body

    const errorsLogin : Partial<reqData> = {}
    
     if (!email) {
       errorsLogin.email = "email is required";
     } else if (!users[email]) {
       errorsLogin.email = "user with this email does not exist";
     }

  
     if (!password) {
       errorsLogin.password = "Password is required";
     } else if (users[email] && users[email].password !== password) {
       errorsLogin.password = "Incorrect password";
     }


    if(Object.keys(errorsLogin).length > 0){
        return res.status(400).json({
            message:"Errors found",
            errorsLogin
        })
    }

    res.status(200).json({
        message:"user loggedin successfully"
    })

}
