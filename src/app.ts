import express from 'express'
import createApiRoute from './routes/createApiRoute'
import globalErrorHandler from './utils/globalErrorHandler'
import addCustomHeader from './utils/addCustomHeader'
import reqLogger from './utils/reqLogger'
import bodyParser from 'body-parser'
import connectDB from './config/db'
const app = express()


connectDB()
app.use(bodyParser.json())
app.use(express.json())
//app.use(addCustomHeader("Developed-By","Yash"))
app.use(reqLogger)
app.use('/api/user',createApiRoute)
app.use(globalErrorHandler)

app.listen(3000,()=>{
    console.log('server active at port 3000');
    
})