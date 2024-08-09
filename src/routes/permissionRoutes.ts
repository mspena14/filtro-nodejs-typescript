import { Router } from 'express';
import PermissionController from '../controllers/permissionController';

export const permissionRouter = Router();

permissionRouter.get('/', PermissionController.getAllPermissions);
permissionRouter.get('/:id', PermissionController.getPermissionsById);
permissionRouter.post('/', PermissionController.createPermissions);
permissionRouter.put('/:id', PermissionController.updatePermissions);
permissionRouter.delete('/:id', PermissionController.deletePermissions);
    
