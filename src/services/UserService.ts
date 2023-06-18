// UserService.ts
import { injectable, inject } from 'inversify';
import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { CreateUserDto } from '../dto/CreateUserDto';

@injectable()
export class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  public async getUser(id: number): Promise<User | null> {
    return this.userRepository.getUser(id);
  }

  public async createUser(user: Partial<User>): Promise<User> {
    const createdUser = await this.userRepository.createUser(user);
    if (!createdUser) {
      // Handle the case when the user creation fails
      throw new Error('Failed to create user');
      // or return an appropriate response
      // return { error: 'Failed to create user' };
    }
  
    return createdUser;
  }
  
}
