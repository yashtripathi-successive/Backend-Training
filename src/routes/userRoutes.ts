import express from 'express'
import validateUser from '../middlewares/validateUser'
import createUser from '../controllers/createUser';


const router = express.Router()


router.post('/register',validateUser,createUser)

export default router;