import { Router } from "express";
import UserController from "../../controllers/user.controller";
// import PostController from '../../controllers/post.controller';
import { isAuth } from "../../middlewares/Auth.middleware";

// instantiate router
const router = Router();

router.get("/user_profile", isAuth, UserController.userProfile);
// router.post("/create_post", isAuth , PostController.createPost);

export default router;
