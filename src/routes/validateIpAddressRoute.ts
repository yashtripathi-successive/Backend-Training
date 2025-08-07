import express from 'express'
import logIpClass from '../controllers/logIP'
import validateIpClass from '../middlewares/validateIP'
const router = express.Router()

const validateIP = new validateIpClass()
const logIP = new logIpClass()

router.get('/validateipaddress',validateIP.validateIpFunction(['IN','US','CA']),logIP.logIpFunction.bind(logIP))

export default router