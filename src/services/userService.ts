import userRepo from "../database/repository/userRepo";
import { IUserService, IUser } from "../interface/auth.interface";


const userService = {} as IUserService;

userService.checkUserExists = async (email:string): Promise<boolean | null> => {
    try {
        const user = await userRepo.findByEmail(email);
        return user ? true : false
    } catch (error) {
        throw error;
    }
}

userService.createUser = async (user:IUser): Promise<IUser | null>  => {
    try {
        const newUser = await userRepo.createUser(user);
        return newUser;
    } catch (error) {
        throw error;
    }
}

export default userService;