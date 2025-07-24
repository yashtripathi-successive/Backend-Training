import express from 'express';
import mockApiDetail from '../controllers/mockApiDetail';
import mockApiGenerator from '../middlewares/mockApiGenerator';
const router = express.Router();
router.post('/mockdata', mockApiGenerator(), mockApiDetail);
export default router;
//# sourceMappingURL=mockDataRoute.js.map