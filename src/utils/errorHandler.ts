import express, { NextFunction, Request, Response } from 'express'
const app = express();


app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(err.message)
    res.status(400).json({
        message:err.message
    })
}
)

function checkError(){
    return (req:Request,res:Response,next:NextFunction)=>{
    try{
    const timestamp = new Date().toString()
    console.log(`${req.method}, ${req.url}, ${timestamp}`)
    // res.json({
    //     method:req.method,
    //     url:req.url,
    //     timestamp
    // })

    next()

    }
    catch(err){
         next(new Error("error found"+err))
    }

    }
}


app.get('/',checkError(),(req:Request,res:Response)=>{
  res.status(201).json({
        message:"done execution"
    })
})

const PORT=3000;

app.listen(PORT,()=>{
    console.log('server active at port',PORT)
})