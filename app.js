const express =require('express')
const mockData = require('./mockData')
const server = express()


const port = 3000;

server.get('/mockdata',(req,res)=>{

    res.json(mockData)
    
    
})
server.listen(port,()=>{
    console.log(`server listen on : ${port}`)
})