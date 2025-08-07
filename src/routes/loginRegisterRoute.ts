import express from 'express'
import loginRegisterClass from '../middlewares/loginRegisterCheck'
import loginRegisterController from '../controllers/loginRegisterController'
import loginRegisterControllerClass from '../controllers/loginRegisterController'
const router = express.Router()

const loginRegisterCheckObj = new loginRegisterClass()
const verifyLoginObj = new loginRegisterClass()
const loginRegisterControllerObj = new loginRegisterControllerClass()

router.post('/register',loginRegisterCheckObj.loginRegisterCheck)
router.post('/login',verifyLoginObj.verifyLogin,loginRegisterControllerObj.loginRegisterController)
export default router
