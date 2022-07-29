import { Router } from 'express';
import userController from '../controllers/auth.controller';

// instantiate router
const router = Router();

// instantiate controller
const user = new userController();

router.post('/userExists', user.userExists);