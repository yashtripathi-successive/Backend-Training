import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'

import userRoutes from './routes/userRoutes'
import registrationFormRoute from './routes/registrationFormRoute'
import checkQueryParameters from './routes/checkQueryParameters'
import validateIpAddressRoute from './routes/validateIpAddressRoute'
import routeBasedValidationCheck from './routes/routeBasedValidationCheck'
import mockDataRoute from './routes/mockDataRoute'
import authRoute from './routes/authRoute'
import addCustomHeader from './utils/addCustomHeader'
import reqLogger from './utils/reqLogger'
import globalErrorHandler from './utils/globalErrorHandler'
import ratelimiter from './middlewares/rateLimiter'
import asyncErrorRoute from './routes/asyncErrorRoute'
import loginRegisterRoute from './routes/loginRegisterRoute'




const app = express()
// app.use(cors())


app.use(bodyParser.json())
app.use(express.json())
app.use(addCustomHeader("DevelopedBy","YashTripathi"))
app.use(reqLogger)
app.set("trust-proxy",true);
//app.use(ratelimiter(60*1000,5))
app.get('/',(req,res)=>{
    console.log(req.headers)
    res.status(201).json({message:"printing header"})
})

// app.use('/api/user',userRoutes)
// app.use('/api/user',registrationFormRoute)
// app.use('/api',checkQueryParameters)
// app.use('/api',validateIpAddressRoute)
// app.use('/api/user',routeBasedValidationCheck)
// app.use('/api/user',mockDataRoute)
// app.use('/api/user',authRoute)
// app.use('/api/user',asyncErrorRoute)
// app.use('/api/user/loginregister',loginRegisterRoute)




app.use(globalErrorHandler)
app.listen(3000,()=>{
    console.log(`server active at port 3000`)
})
