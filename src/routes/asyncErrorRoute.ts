import express from 'express'
import asyncError from '../middlewares/asyncError'
const router = express.Router()


router.get('/asyncerror',asyncError)

export default router