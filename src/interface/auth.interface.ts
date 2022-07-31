import { Document } from 'mongoose';
import { Request } from "express"
import { JwtPayload } from 'jsonwebtoken';

// middleware payload
export interface IGetUserAuthInfoRequest extends Request {
    user: string | JwtPayload;
};

export interface IAuthMiddleware extends Request {
    user: {
        id: string;
    }
}

//  user model interface
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    profileUrl: string;
    email: string;
}

// user services interface design
export interface IUserService {
    checkUserExists: (email: string) => Promise<boolean | null>;
    createUser: (user: IUser) => Promise<IUser | null>;
}