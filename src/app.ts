import express from 'express'
import userRoute from './routes/userRoute'
import globalErrorHandler from './utils/globalErrorHandler'
import connectDB from './config/db'
import cors from 'cors'
import helmet from 'helmet'
import securityHeaderClass from './utils/securityHeader'

const app = express()


connectDB()
app.use(helmet())
app.use(express.json())
app.use(cors())
const securityHeaderObj = new securityHeaderClass()
app.use(securityHeaderObj.securityHeader)
app.use('/api/user',userRoute)
app.use(globalErrorHandler)


app.listen(3000,()=>{
    console.log('server active at port 3000')
})
