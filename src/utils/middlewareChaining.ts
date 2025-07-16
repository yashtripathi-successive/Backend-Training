import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
const app = express();

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(err.message)
    res.status(400).json({
        message:err.message
    })
})

function middleware1(){
    return (req:Request,res:Response,next:NextFunction)=>{
    try{
    console.log("middleware 1 envoked")
    
    next()
    }
    catch(err){
         next(new Error("error found in 1st middleware i.e. : "+ err))
    }
    
}
}
function middleware2(){
    return (req:Request,res:Response,next:NextFunction)=>{
    try{
    console.log("middleware 2 envoked")
    
    next()
    }
    catch(err){
         next(new Error("error found in 2nd middleware i.e. : "+ err))
    }
}
}


app.get('/',middleware1(),middleware2(), (req:Request,res:Response)=>{
    console.log("final middleware envoked")
    res.status(400).json({
        message:"final middleware envoked"
    })
})

const PORT=3000;

app.listen(PORT,()=>{
    console.log('server active at port',PORT)
})