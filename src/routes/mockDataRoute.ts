import express from 'express'
import mockApiDetail from '../controllers/mockApiDetail'
import mockApiGenerator from '../middlewares/mockApiGenerator'
import mockApiGeneratorClass from '../middlewares/mockApiGenerator'
import mockApiDetailClass from '../controllers/mockApiDetail'
const router = express.Router()

const mockApiGeneratorObj = new mockApiGeneratorClass()
const mockApiDetailObj = new mockApiDetailClass()
router.post('/mockdata',mockApiGeneratorObj.mockApiGenerator(),mockApiDetailObj.mockApiDetail)

export default router