import express, { Request, Response } from 'express'
import AuthController from '../middlewares/loginAndRegisterMiddleware'




const router = express.Router()

const authController = new AuthController()

router.post('/register',authController.register)

// router.post('/login',login)

router.post('/login',authController.login)

router.post('/protected',authController.authenticationMiddleware,(req:Request,res:Response)=>{
    res.status(201).json({
        message:"welcome to home page"
    })
})

export default router