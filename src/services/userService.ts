import { UserRepository } from './../repositories';
import { injectable, inject } from 'tsyringe';
import { UserModel } from "../models";

@injectable()
export class UserService { 
    constructor(@inject(UserRepository) private userRepository: UserRepository) {}

    async getAllUsers() { 
        return await this.userRepository.findAll(); 
    }

    async getUsersById(id: number) { 
        return await this.userRepository.findById(id);
    }

    async getUserByEmail(email: string): Promise<UserModel | null> {
        return await this.userRepository.findByEmail(email);
      }

    async createUsers(user: Partial<UserModel>) { 
        return await this.userRepository.create(user);
    }

    async updateUsers(id: number, user: Partial<UserModel>) { 
        return await this.userRepository.update(id, user);
    }

    async deleteUsers(id: number) {
        return await this.userRepository.deleteById(id);
    }

    async checkUserCredentials(
        email: string,
        password: string
      ): Promise<UserModel> {
        const user = await this.getUserByEmail(email);
        if (user && user.password === password) {
          return user;
        }
        throw new Error("Invalid credentials");
      }
}