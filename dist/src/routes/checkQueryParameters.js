import express from 'express';
import writeQueryParameters from '../controllers/writeQueryParameters';
import validateQueryParameters from '../middlewares/validateQueryParameters';
const router = express.Router();
router.post('/checkqueryparameters', validateQueryParameters(["age", "limit"]), writeQueryParameters);
export default router;
//# sourceMappingURL=checkQueryParameters.js.map