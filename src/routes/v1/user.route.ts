import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import { isAuth } from '../../middlewares/Auth.middleware';

// instantiate router
const router = Router();
const user = new UserController()

router.get('/user_profile', isAuth , user.userProfile );

export default router;