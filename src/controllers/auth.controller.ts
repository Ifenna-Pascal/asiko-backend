import authService from '../services/authService';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../core/AppError';
import { HttpCode } from '../interface/server.interface';

export default class AuthController {
    public userExists = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email } = req.body;
            const userExists = await authService.checkUserExists(email);
            res.status(200).json({
                message: "success",
                value: userExists 
            });
        } catch (error) {
            next(new AppError({httpCode:HttpCode.BAD_REQUEST, description: error.message}))
        }
    }

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            const newUser = await authService.createUser(data);
            res.status(200).json({
                message: "success user created successfully",
                value: newUser
            });
        } catch (error) {
            next(new AppError({httpCode:HttpCode.BAD_REQUEST, description: error.message}))
        }
    }
}

