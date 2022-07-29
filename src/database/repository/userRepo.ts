import { UserModel as Users } from '../models/User';
import { IUser } from "../../interface/auth.interface";

class UserRepo {
  public async findByEmail(email: string): Promise<IUser | null> {
    return Users.findOne({ email: email }).exec();
  }

  public async createUser(user: IUser): Promise<IUser> {
    return Users.create(user);
  }
}

export default new UserRepo();


