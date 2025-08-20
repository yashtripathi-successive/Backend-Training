import express from 'express'
import createApiClass from '../middlewares/createAPI'
const router = express.Router()

const createApiObj = new createApiClass()
router.post('/',createApiObj.creatAPI.bind(createApiObj))

export default router