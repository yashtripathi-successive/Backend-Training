import express, {Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
const app = express()

interface jwtData{
    name:string;
    gender:string;

}

const user: jwtData = {name:"yash",gender:"male"}
const secretKey = "xyz"
app.get('/loginfordashboard',(req:Request,res:Response)=>{
    const token = jwt.sign(user,secretKey)
    console.log('Token is : ', token )
    res.status(201).json({token})
})


app.get('/dashboardpage',(req:Request,res:Response,next:NextFunction)=>{
    const header = req.headers.authorization
    if(!header){
        return res.status(400).json({
            message:"invalid header"
        })
    }

    const validHeader = header.split(' ')[1]
   try {
   const data = jwt.verify(validHeader, secretKey) as jwtData;
   console.log(data);
   return res.status(200).json({ data });
   } catch (err) {
   return res.status(401).json({ message: "Invalid or expired token" });
   }
})

app.listen(3000,()=>{
    console.log('server active at port 3000')
})
