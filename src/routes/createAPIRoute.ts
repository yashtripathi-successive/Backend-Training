import express, { Request, Response } from 'express'
import creatAPI from '../middlewares/createAPI'
const router = express.Router()

router.post('/',creatAPI)

export default router