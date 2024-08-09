import { EntityRepository } from '../repositories/entityRepository';
import { injectable, inject } from 'tsyringe';
import { EntityModel } from "../models";

@injectable()
export class EntityService { 
    constructor(@inject(EntityRepository) private entityRepository: EntityRepository) {}

    async getAllEntities() { 
        return await this.entityRepository.findAll(); 
    }

    async getEntitiesById(id: number) { 
        return await this.entityRepository.findById(id);
    }

    async createEntities(entity: Partial<EntityModel>) { 
        return await this.entityRepository.create(entity);
    }

    async updateEntities(id: number, entity: Partial<EntityModel>) { 
        return await this.entityRepository.update(id, entity);
    }

    async deleteEntities(id: number) { 
        return await this.entityRepository.deleteById(id);
    }
}