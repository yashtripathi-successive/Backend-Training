import { NextFunction, Request, Response } from "express";

interface User {
  password: string;
}

const users: Record<string, User> = {};

export function loginRegisterCheck(req:Request,res:Response,next:NextFunction){
    const registerError: Record<string, string> = {};
    const {email,password} = req.body
    if(!email){
       // res.status(400).json({message:"email is required"})
       registerError.email = "email is equired"
    }
    if(!password){
       // res.status(400).json({message:"password is required"})
       registerError.password = "password is equired"
    }

    
    if(users[email]){
       // res.status(400).json({message:"user already exists"})
       registerError.email = "user already exists"
    }

    if(Object.keys(registerError).length > 0){
        return res.status(400).json({message:"errors found in register",registerError})
    }

    users[email] = {password}

    
    res.status(201).json({message: "user created successfully"})

}

export function  verifyLogin(req:Request,res:Response,next:NextFunction){
    
    const loginError: Record<string, string> = {};
    const {email,password} = req.body

    if(!email){
       // res.status(400).json({message : "email is invalid"})
       loginError.email = "email is inavlid"
    }

    if(!password){
       //  res.status(400).json({message: "password is invalid"})
       loginError.password = "password is invalid"
       
    }

    if(users[email] && users[email].password!==password){
       //  res.status(400).json({message : "email or password is wrong"})
       loginError.email = "email or password is wrong"
    }

    if(Object.keys(loginError).length>0){
       return res.status(400).json({message: "errors found in login",loginError})
    }
    
    
    next();

}
