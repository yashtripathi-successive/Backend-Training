import express from 'express';
import loggingDetails from '../controllers/loggingDetails';
import auth from '../middlewares/auth';
import verifyingAuth from '../middlewares/verifyingAuth';
const router = express.Router();
router.get('/auth', auth);
router.get('/protected', verifyingAuth, loggingDetails);
export default router;
//# sourceMappingURL=authRoute.js.map