import express, { Request, Response } from 'express'
import AuthController from '../middlewares/loginAndRegisterMiddleware'




const router = express.Router()

const authController = new AuthController()

router.post('/register',authController.register)

// router.post('/login',login)

router.post('/login',authController.authenticationMiddleware,authController.login)

export default router