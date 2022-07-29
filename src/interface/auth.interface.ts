import { Document } from 'mongoose';

//  user model interface
export  interface IUser extends Document {
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