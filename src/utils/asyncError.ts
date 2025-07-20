import express, { NextFunction, Request, Response } from 'express'
const app = express()

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(err.message)
    res.status(400).json({
        message:err.message
    })
})

app.get('/', async (req:Request,res:Response,next:NextFunction) => {
    try{
        await new Promise((resolve,reject)=>{
            reject("Error Successfully Generated")
        })
    }
    catch(err){
        next(err)
    }
})

app.listen(3000,()=>{
    console.log('server active at port 3000')
})