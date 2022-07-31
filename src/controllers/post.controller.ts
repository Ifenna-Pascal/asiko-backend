import { NextFunction, Request, Response } from 'express';
import { AppError } from '../core/AppError';
import { HttpCode } from '../interface/server.interface';
import postService from '../services/post.service';

class PostController {
    public createPost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newPost = await postService.createPost(req.body);
            res.status(200).json({
                message: "Post created Successfully",
                value: newPost
            });
        } catch (error) {
            next(new AppError({ httpCode: HttpCode.BAD_REQUEST, description: error.message }))
        }
    }
}

export default new  PostController ();
