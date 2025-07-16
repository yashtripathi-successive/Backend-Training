import express, { Request, Response } from 'express'
import { faker } from '@faker-js/faker'
import jwt from 'jsonwebtoken'
const app = express();

app.get('/',(req:Request,res:Response)=>{
    const timestamp = new Date().toString()
    console.log(`${req.method}, ${req.url}, ${timestamp}`)
    res.json({
        method:req.method,
        url:req.url,
        timestamp
    })
})



const PORT=3000;

app.listen(PORT,()=>{
    console.log('server active at port',PORT)
})