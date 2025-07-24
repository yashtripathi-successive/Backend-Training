import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import User from '../models/User'

export const secretKey = "yash"

class AuthController{


public async register(req:Request,res:Response,next:NextFunction){

    const {name,email,password} = req.body
    console.log("Request body:", req.body);

    try{
       const userExists = await User.findOne({email})
       
       if(userExists){
          return res.status(400).json({
            message:"user already exists"
          })
        }

        const user = await User.create({name,email,password})

        const token = jwt.sign({id:user._id,email:user.email},secretKey)
        console.log(token)

        res.status(201).json({
        message:"user created successfully",
        data:{
            name:name,
            email:email
        },
        token
        })
    }catch(err){
        next(err)
    }

}


 public async login(req:Request,res:Response,next:NextFunction){


    try{

        const {name,email,password} = req.body
        console.log("Request body:", req.body);
        if(!email || !password || !name){
            return res.status(400).json({
                message:"one of the field is missing"
            })
        }

        const user = await User.findOne({email}) 

        if(!user || !(await user.comparePassword(password))){
            return res.status(400).json({
                message:"invalid credentials"
            })
        }

        const token = jwt.sign({id:user._id,email:user.email},secretKey)
        console.log(token)

        res.status(201).json({
        message:"user loggedin successfully",
        data:{
            name:name,
            email:email
        },
        token
        })

    }catch(err){
        next(err)
    }

}



 public authenticationMiddleware(req:Request,res:Response,next:NextFunction){

    const header = req.headers.authorization

    if(!header){
        return res.status(400).json({
            message:"header is missing"
        })
    }

    const token = header.split(' ')[1]
    const data = jwt.verify(token,secretKey)
    console.log(data)
   next()

}
}

export default AuthController