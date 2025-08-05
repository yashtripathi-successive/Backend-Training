import express,{ Request, Response} from "express";


const mockData = require('./mockData')
const server = express()


const port = 3000;

server.get('/mockdata',(req:Request,res:Response)=>{

    res.json(mockData.default)
    
    
})
server.listen(port,()=>{
    console.log(`server listen on : ${port}`)
})