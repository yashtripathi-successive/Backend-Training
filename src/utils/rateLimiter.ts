import express, { Request, Response } from 'express'
import rateLimit from 'express-rate-limit'
const app = express()



function rateLimiter(time:number,requests:number){
    return rateLimit({
    windowMs:time,
    max:requests,
    // message:"rate limit is exceeded"
    handler : (req:Request,res:Response) => {
        res.status(400).json({
            message:"rate limit is exceeded"
        })
    }
    }) 
}

app.get('/',rateLimiter(1*1000*60,5),(req:Request,res:Response)=>{
    res.status(201).json({
        message:"successfully done"
    })
})

app.listen(3000,()=>{
    console.log(`server active at port : 3000`)
})