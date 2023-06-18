import { User } from '../models/User';
import { injectable } from 'inversify';

@injectable()
class UserRepository {
  public async getAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  public async getUser(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  // public async createUser(user: Partial<User>): Promise<User> {
  //   return User.create(user) as Promise<User>;
  // }

  public async createUser(user: Partial<User>): Promise<User | null> {
    try {
      const createdUser = await User.create(user);
      return createdUser;
    } catch (error) {
      // Handle any errors that occur during the creation process
      console.error('Error creating user:', error);
      return null;
    }
  }
  
}

export default UserRepository;
