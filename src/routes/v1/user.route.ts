import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import PostController from '../../controllers/post.controller';
import { isAuth } from '../../middlewares/Auth.middleware';

// instantiate router
const router = Router();
const user = new UserController()

router.get('/user_profile', isAuth , user.userProfile );
router.post("/create_post", isAuth , PostController.createPost);

export default router;