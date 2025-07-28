import { NextFunction } from "connect";
import { Request, Response } from "express";
import userSchema from "../models/userSchema";
import jwt from 'jsonwebtoken'

const secretKey = "yash"

export async function register(req:Request,res:Response,next:NextFunction){

    const {name,email,password} = req.body


    const userExists = await userSchema.findOne({email})

    if(userExists){
        return res.status(400).json({
            message:"user already exists"
        })
    }

    const user = await userSchema.create({name,email,password})

    const token = jwt.sign({user},secretKey)
    console.log(token)

    res.status(201).json({
        message:"user created successfully",
        user
    })
}


export async function login(req:Request,res:Response,next:NextFunction){

    const {name,email,password} = req.body

    const userExists = await userSchema.findOne({email})

    if(!userExists){
        return res.status(400).json({
            message:"user not exists"
        })
    }

    const token = jwt.sign({userExists},secretKey)
    console.log(token)


    res.status(201).json({
        message:"user loggedin successfully",
        userExists
    })
}


export function auth(req:Request,res:Response,next:NextFunction){

    const header = req.headers.authorization

    if(!header){
        return res.status(400).json({
            message:"header missing"
        })
    }

    const token = header.split(' ')[1]


    if(!token){
        return res.status(400).json({
            message:"token missing"
        })
    }

    const data = jwt.verify(token,secretKey)
    console.log(data)

    next()

}



