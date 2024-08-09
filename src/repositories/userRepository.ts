import { injectable } from 'tsyringe';
import { UserModel } from '../models';

@injectable()
export class UserRepository { 
    async findAll() { 
        return await UserModel.findAll();
    }

    async findById(id: number) { 
        return await UserModel.findByPk(id);
    }

    async findByEmail(email: string) { 
        return await UserModel.findOne({ where: { email } });
    }

    async create(user: Partial<UserModel>) {
        return await UserModel.create(user);
    }

    async update(id: number, newProductCart: Partial<UserModel>) { 
        return await UserModel.update(newProductCart, { where: {id}})
    }

    async deleteById(id: number) {
        return await UserModel.destroy({where: {id: id}})
    }
}