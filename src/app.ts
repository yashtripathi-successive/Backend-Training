import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import intentionalError from "./middlewares/asyncError";
import { login, register } from "./middlewares/errorsValidation";
import { loginCodes, registerCodes } from "./middlewares/errorCodes";
const app = express()



app.use(express.json())
app.post('/login',login)
app.post('/register',register)

app.post('/logincodes',loginCodes)
app.post('/registercodes',registerCodes)

app.get('/',intentionalError)
app.use(globalErrorHandler)

app.listen(3000,()=>{
    console.log(`server active active at port 3000`)
})