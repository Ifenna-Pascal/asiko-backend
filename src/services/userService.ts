import userRepo from "../database/repository/userRepo";
import { IUserService, IUser } from "../interface/auth.interface";


const userService = {} as IUserService;

userService.checkUserExists = async (email:string): Promise<IUser | null> => {
    try {
        const user = await userRepo.findByEmail(email);
        return user;
    } catch (error ) {
        throw new Error(error.message);
    }
}

userService.createUser = async (user:IUser): Promise<IUser | null>  => {
    try {
        const newUser = await userRepo.createUser(user);
        return newUser;
    }  catch (error:any ) {
        throw new Error(error.message);
    }
}

export default userService;