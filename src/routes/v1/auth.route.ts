import { Router } from 'express';
import authController from '../../controllers/auth.controller';
import validator from '../../middlewares/validator';
import authValidatorSchema from '../../validator/auth.validator'

// instantiate router
const router = Router();

// instantiate controller
const user = new authController();

router.post('/userExists', validator(authValidatorSchema.userExists, "body"), user.userExists);
router.post('/signup', user.createUser);
router.post('/sign_token', user.SignToken);

export default router;