import express, { Request, Response } from 'express'
import validateGeoIp from './middlewares/geolocationIP'
import validateMockData from './middlewares/validateMockData'
import validateQueryParameters from './middlewares/validateQueryParameters'
import validateRegistrationForm from './middlewares/validateRegistrationForm'
import validateRoute from './middlewares/validationBasedOnRoute'
const app = express()
app.use(express.json())
const locations:string[] = ['CA','IN','US','UK']

app.get('/geoip',validateGeoIp(locations),(req:Request,res:Response)=>{
    res.status(201).json({
        message:"valid geolocation"
    })
})

app.post('/mockdata',validateMockData,(req:Request,res:Response)=>{
    res.status(201).json({
    message:"validation is done",
   })
})


app.post('/queryparameters',validateQueryParameters(['month','year']) ,(req:Request,res:Response)=>{
        res.status(201).json({
        message:"parameters are numeric"
    })
})


app.post('/userdetails',validateRoute,(req,res)=>{
    res.status(201).json({
        message:"user details are valid "
    })
})


app.post('/productdetails',validateRoute,(req,res)=>{
    res.status(201).json({
        message:"product details are valid "
    })
})


app.post('/registrationform',validateRegistrationForm,(req:Request,res:Response)=>{   
    res.status(201).json({
        message:"validation done successfully",  
    })
})


app.listen(3000,()=>{
    console.log('server active at port 3000')
})