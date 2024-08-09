import { injectable } from 'tsyringe';
import { PermissionModel } from '../models';

@injectable()
export  class PermissionRepository { 
    async findAll() { 
        return await PermissionModel.findAll();
    }

    async findById(id: number) { 
        return await PermissionModel.findByPk(id);
    }

    async create(permission: Partial<PermissionModel>) { 
        return await PermissionModel.create(permission);
    }

    async update(id: number, newUser: Partial<PermissionModel>){
        return await PermissionModel.update(newUser, { where: {id}})
    }

    async deleteById(id: number){
        return await PermissionModel.destroy({where: {id: id}})
    }
}