import express from 'express'
import validateRegistrationForm from '../middlewares/validateRegistrationForm'
import submitData from '../controllers/submitData'
import submitDataClass from '../controllers/submitData'
import validateRegistrationFormClass from '../middlewares/validateRegistrationForm'
const router = express.Router()

const submitDataObj = new submitDataClass()
const validateRegistrationFormObj = new validateRegistrationFormClass()

router.post('/registrationform',validateRegistrationFormObj.validateRegistrationForm,submitDataObj.submitData)

export default router