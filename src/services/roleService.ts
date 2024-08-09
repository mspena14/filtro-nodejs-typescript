import { RoleRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { RolModel } from "../models";

@injectable()
export class RoleService { 
    constructor(@inject(RoleRepository) private roleRepository: RoleRepository) {}

    async getAllRoles() { 
        return await this.roleRepository.findAll(); 
    }

    async getRolesById(id: number) { 
        return await this.roleRepository.findById(id);
    }

    async createRoles(role: Partial<RolModel>) { 
        return await this.roleRepository.create(role);
    }

    async updateRoles(id: number, role: Partial<RolModel>) { 
        return await this.roleRepository.update(id, role);
    }

    async deleteRoles(id: number) { 
        return await this.roleRepository.deleteById(id);
    }
}