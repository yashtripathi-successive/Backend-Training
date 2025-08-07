import express from 'express'
import validateRouteBasedDetails from '../middlewares/validateRouteBasedDetails'
import validateDetails from '../controllers/validateDetails'
import validateRouteBasedDetailsClass from '../middlewares/validateRouteBasedDetails'
import validateDetailsClass from '../controllers/validateDetails'
const router = express.Router()



const validateRouteBasedDetailsObj = new validateRouteBasedDetailsClass()
const validateDetailsObj = new validateDetailsClass()

router.post('/registrationform',validateRouteBasedDetailsObj.validateRouteBasedDetails,validateDetailsObj.validateDetails)
router.post('/register',validateRouteBasedDetailsObj.validateRouteBasedDetails,validateDetailsObj.validateDetails)

export default router