import express, { NextFunction, Request, Response } from "express"

const app = express()


function validateParameters(parameters:string[]=[]){

    return (req:Request,res:Response,next:NextFunction) =>{
    for(const parameter of parameters){

        const value = Number(req.query[parameter])
        if(value === undefined){
            return res.status(400).json({
                message:"parameter is undefined"

            })
        }

        else if (isNaN(value)){
           return res.status(400).json({
                message:"parameter is string"
            })
        }
     
    }
    next()
}
}
app.get('/validatequeryparameters',validateParameters(['firstname','lastname']) ,(req:Request,res:Response)=>{


        res.status(201).json({
        message:"parameters are numeric"
    })

})

app.listen(9000,()=>{
    console.log('server active at port 9000')
})