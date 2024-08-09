import { injectable } from 'tsyringe';
import { RolModel } from '../models';

@injectable()
export class RoleRepository { 
    async findAll() { 
        return await RolModel.findAll();
    }

    async findById(id: number) { 
        return await RolModel.findByPk(id);
    }

    async create(role: Partial<RolModel>) { 
        return await RolModel.create(role);
    }

    async update(id: number, newProductCart: Partial<RolModel>) { 
        return await RolModel.update(newProductCart, { where: {id}})
    }

    async deleteById(id: number) {
        return await RolModel.destroy({where: {id: id}})
    }

}