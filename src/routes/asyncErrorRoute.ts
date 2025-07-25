import express from 'express'
import asyncError from '../middlewares/asyncError'
import asyncErrorClass from '../middlewares/asyncError'
const router = express.Router()

const asyncErrorobj = new asyncErrorClass()

router.get('/asyncerror',asyncErrorobj.asyncError)

export default router