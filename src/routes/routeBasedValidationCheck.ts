import express from 'express'
import validateRouteBasedDetails from '../middlewares/validateRouteBasedDetails'
import validateDetails from '../controllers/validateDetails'
const router = express.Router()

router.post('/registrationform',validateRouteBasedDetails,validateDetails)
router.post('/register',validateRouteBasedDetails,validateDetails)

export default router