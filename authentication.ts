/*
Authentication middleware is a specialized piece of software within a web application's 
request pipeline that is responsible for verifying user credentials and authorizing access 
to resources or endpoints
*/

import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
const app = express()

const user = { id: 1, name: "yash", gender: "male", city: "kanpur" }

interface jwtData{
    id:number;
    name:string;
    gender:string;
    city:string;
}

const secretKey = 'yash'
app.get('/login',(req:Request,res:Response,next:NextFunction)=>{
    const token = jwt.sign(user,secretKey)
    console.log(token)
    res.status(201).json({token})
})

app.get('/dashboard',(req:Request,res:Response,next:NextFunction)=>{
     const header = req.headers.authorization
     if(!header ){
        return res.status(400).json({
            message:"invalid header"
        })
     } 


     const token = header.split(' ')[1]
     const data = jwt.verify(token,secretKey) as jwtData
     console.log(data)
     res.status(201).json({ data })
})

app.listen((3000),()=>{
     console.log('server is acive at port 3000')
})