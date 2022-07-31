import userRepo from "../database/repository/userRepo";
import { IUserService, IUser } from "../interface/auth.interface";


const authService = {} as IUserService;

authService.checkUserExists = async (email:string): Promise<boolean | null> => {
    try {
        const user = await userRepo.findByEmail(email);
        return user ? true : false;
    } catch (error ) {
        throw new Error(error.message);
    }
}

authService.createUser = async (user:IUser): Promise<IUser | null>  => {
    try {
        const newUser = await userRepo.createUser(user);
        return newUser;
    }  catch (error:any ) {
        throw new Error(error.message);
    }
}

export default authService;