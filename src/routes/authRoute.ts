import express from 'express'
import loggingDetails from '../controllers/loggingDetails'
import auth from '../middlewares/auth'
import verifyingAuth from '../middlewares/verifyingAuth'
import authClass from '../middlewares/auth'
import verifyingAuthClass from '../middlewares/verifyingAuth'
import loggingDetailsClass from '../controllers/loggingDetails'
const router = express.Router()

const authClassObj = new authClass()
const verifyingAuthClassObj = new verifyingAuthClass() 
const loggingDetailsClassObj = new loggingDetailsClass()

router.get('/auth',authClassObj.auth)
router.get('/protected',verifyingAuthClassObj.verifyingAuth,loggingDetailsClassObj.loggingDetails)

export default router