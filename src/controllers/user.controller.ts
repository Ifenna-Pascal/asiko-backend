import { NextFunction, Request, Response } from 'express';
import { AppError } from '../core/AppError';
import { IAuthMiddleware } from '../interface/auth.interface';
import { HttpCode } from '../interface/server.interface';
import UserService from '../services/userService';
class UserController {
    public userProfile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userExists = await UserService.getUserPofile((req as IAuthMiddleware).user?.id);
            console.log(userExists)
            res.status(200).json({
                message: "success",
                value: userExists
            });
        } catch (error) {
            next(new AppError({ httpCode: HttpCode.BAD_REQUEST, description: error.message }))
        }
    }
}

export default new UserController();