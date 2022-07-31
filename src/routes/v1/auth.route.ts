import { Router } from 'express';
import authController from '../../controllers/auth.controller';

// instantiate router
const router = Router();

// instantiate controller
const user = new authController();

router.post('/userExists', user.userExists);
router.post('/signup', user.createUser);

export default router;