import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { PermissionService } from '../services/permissionService';



export default class PermissionController { 
    static async getAllPermissions(req: Request, res: Response) {
        try {
            const permissionService = container.resolve(PermissionService); 
            const permissions = await permissionService.getAllPermissions();
            if (!permissions) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: permissions
            })

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async getPermissionsById(req: Request, res: Response) { 
        try {
            const permissionService = container.resolve(PermissionService);
            const permissions = await permissionService.getPermissionsById(parseInt(req.params.id));
            if (!permissions) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(permissions)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
    
    static async createPermissions(req: Request, res: Response) { 
        try {
            const permissionService = container.resolve(PermissionService);
            
            const permissions = await permissionService.createPermissions(req.body);
            console.log(permissions.toJSON());
            res.status(201).json(permissions)

        } catch (error) {
            res.status(400).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async updatePermissions(req: Request, res: Response) { 
        try {
            const permissionService = container.resolve(PermissionService);
            const permissions = await permissionService.updatePermissions(parseInt(req.params.id), req.body);
            res.status(200).json(permissions);
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async deletePermissions(req: Request, res: Response) { 
        try {
            const permissionService = container.resolve(PermissionService);
            const permissions = await permissionService.deletePermissions(parseInt(req.params.id));
            res.status(200).json({
                nessage: "Data deleted successfully"
            });
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
}