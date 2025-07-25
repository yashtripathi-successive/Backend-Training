import express from 'express'
import writeQueryParameters from '../controllers/writeQueryParameters'
import validateQueryParameters from '../middlewares/validateQueryParameters'
import validateQueryParametersClass from '../middlewares/validateQueryParameters'
import writeQueryParametersClass from '../controllers/writeQueryParameters'
const router = express.Router()


const validateIpAddressRouteObj = new validateQueryParametersClass()
const writeQueryParametersObj = new writeQueryParametersClass()

router.post('/checkqueryparameters',validateIpAddressRouteObj.validateQueryParameters(["age","limit"]),writeQueryParametersObj.writeQueryParameters)

export default router