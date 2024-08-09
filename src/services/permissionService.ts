import {PermissionRepository} from '../repositories';
import { injectable, inject } from 'tsyringe';
import { PermissionModel } from "../models";

@injectable()
export class PermissionService { 
    constructor(@inject(PermissionRepository) private permissionRepository: PermissionRepository) {}

    async getAllPermissions() { 
        return await this.permissionRepository.findAll(); 
    }

    async getPermissionsById(id: number) { 
        return await this.permissionRepository.findById(id);
    }

    async createPermissions(permission: Partial<PermissionModel>) { 
        return await this.permissionRepository.create(permission);
    }

    async updatePermissions(id: number, permission: Partial<PermissionModel>) { 
        return await this.permissionRepository.update(id, permission);
    }

    async deletePermissions(id: number) { 
        return await this.permissionRepository.deleteById(id);
    }
}