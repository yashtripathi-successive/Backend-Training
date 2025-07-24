import express from 'express';
import { loginRegisterCheck, verifyLogin } from '../middlewares/loginRegisterCheck';
import loginRegisterController from '../controllers/loginRegisterController';
const router = express.Router();
router.post('/register', loginRegisterCheck);
router.post('/login', verifyLogin, loginRegisterController);
export default router;
//# sourceMappingURL=loginRegisterRoute.js.map