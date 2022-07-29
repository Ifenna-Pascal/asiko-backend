import { UserModel as Users } from '../models/User';
import { IUser } from "../../interface/auth.interface";

class UserRepo {
  public async findByEmail(email: string): Promise<IUser | null> {
   try {
    const user = await  Users.findOne({ email: email }).exec();
    console.log(user);
    return user
   }catch (error) {
    console.log(error,"error")
    throw new Error(error.message)
   }
  }

  public async createUser(user: IUser): Promise<IUser> {
    try {
      const newUser = await Users.create(user);;
      return newUser
     }catch (error) {
      throw new Error(error.message)
     }
  }
}

export default new UserRepo();


