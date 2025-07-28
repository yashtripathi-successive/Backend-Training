import express from 'express'
import userRoute from './routes/userRoute'
import globalErrorHandler from './utils/globalErrorHandler'
import connectDB from './config/db'

const app = express()


connectDB()
app.use(express.json())
app.use('/api/user',userRoute)
app.use(globalErrorHandler)


app.listen(3000,()=>{
    console.log('server active at port 3000')
})