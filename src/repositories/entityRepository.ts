import { injectable } from 'tsyringe';
import { EntityModel } from '../models';

@injectable()
export class EntityRepository { 
    async findAll() { 
        return await EntityModel.findAll();
    }

    async findById(id: number) { 
        return await EntityModel.findByPk(id);
    }

    async create(entity: Partial<EntityModel>) { 
        return await EntityModel.create(entity);
    }

    async update(id: number, newEntity: Partial<EntityModel>) { 
        return await EntityModel.update(newEntity, { where: {id}})
    }

    async deleteById(id: number) {
        return await EntityModel.destroy({where: {id: id}})
    }
}