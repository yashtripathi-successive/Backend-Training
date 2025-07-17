import express, { NextFunction, Request, Response } from 'express'
import validationSchema from './validationSchema'
const app = express()


app.use(express.json())


function validateFunction(){
    return (req:Request,res:Response,next:NextFunction)=>{
        type ValidRoutes = keyof typeof validationSchema;
         const route = req.route.path

         if(!route) return res.status(400).json({
            message:"invalid route"
         })

         if(route){
            const {error,value} = validationSchema[route as ValidRoutes].validate(req.body)
            if(error){
                res.status(400).json({
                    message:"Error found in schema"
                })
            }

            else{
                next()
            }
         }
    }
}


app.post('/userdetails',validateFunction(),(req,res)=>{
    res.status(201).json({
        message:"user details are valid "
    })
})


app.post('/productdetails',validateFunction(),(req,res)=>{
    res.status(201).json({
        message:"product details are valid "
    })
})



app.listen(8000,()=>{
    console.log('server active at port no. : 8000')
})