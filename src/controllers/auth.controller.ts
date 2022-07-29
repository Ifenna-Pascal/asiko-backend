import userService from '../services/userService';
import { Request, Response } from 'express';

export default class AuthController {
    public userExists = async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            const userExists = await userService.checkUserExists(email);
            res.status(200).json({
                message: "success",
                value: userExists
            });
        } catch (error) {
            res.status(403).json({ message: "error", value: error })
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const newUser = await userService.createUser(data);
            res.status(200).json({
                message: "success user created successfully",
                value: newUser
            });
        } catch (error) {
            res.status(403).json({ message: "error", value: error })
        }
    }
}

