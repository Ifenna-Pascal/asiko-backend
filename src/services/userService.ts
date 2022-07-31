import userRepo from "../database/repository/userRepo";
import { IUser } from "../interface/auth.interface";


class UserService {
    public getUserPofile = async (email:string): Promise<IUser | null> => {
        try {
            const user = await userRepo.findByEmail(email);
            return user && user;
        } catch (error ) {
            throw new Error(error.message);
        }
    }
}

export default new UserService();