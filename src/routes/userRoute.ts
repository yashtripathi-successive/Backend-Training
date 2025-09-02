import express, { Request, Response } from 'express'
import { auth, login, register } from '../middlewares/user'
import userRoles from '../middlewares/userRoles'

const userRoute = express.Router()

userRoute.post('/register',register)
userRoute.post('/login',login)

userRoute.get('/dashboard',auth,userRoles('admin'),(req:Request,res:Response)=>{
    res.status(200).json({
        message:"welcome to dashboard"
    })
})


userRoute.get('/editor',auth,userRoles('admin','editor'),(req:Request,res:Response)=>{
    res.status(200).json({
        message:"welcome to Editor"
    })
})


userRoute.get('/homepage',auth,userRoles('admin','editor','user'),(req:Request,res:Response)=>{
    res.status(200).json({
        message:"welcome to home page"
    })
})

export default userRoute  