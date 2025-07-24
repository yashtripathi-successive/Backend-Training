import express from 'express';
import validateRegistrationForm from '../middlewares/validateRegistrationForm';
import submitData from '../controllers/submitData';
const router = express.Router();
router.post('/registrationform', validateRegistrationForm, submitData);
export default router;
//# sourceMappingURL=registrationFormRoute.js.map