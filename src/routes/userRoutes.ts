import express from 'express'
import validateUser from '../middlewares/validateUser'
import createUser from '../controllers/createUser';
import validateUserClass from '../middlewares/validateUser';
import createUserClass from '../controllers/createUser';


const router = express.Router()

const validateUserObj = new validateUserClass()
const createUserObj = new createUserClass()
router.post('/register',validateUserObj.validateUser,createUserObj.createUser)

export default router;