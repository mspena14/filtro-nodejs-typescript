import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RoleService } from '../services';



export default class RoleController { 
    static async getAllRoles(req: Request, res: Response) {
        try {
            const roleService = container.resolve(RoleService);
            const roles = await roleService.getAllRoles();
            if (!roles) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: roles
            })

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async getRolesById(req: Request, res: Response) { 
        try {
            const roleService = container.resolve(RoleService);
            const roles = await roleService.getRolesById(parseInt(req.params.id));
            if (!roles) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(roles)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
    
    static async createRoles(req: Request, res: Response) { 
        try {
            const roleService = container.resolve(RoleService);
            
            const roles = await roleService.createRoles(req.body);
            console.log(roles.toJSON());
            res.status(201).json(roles)

        } catch (error) {
            res.status(400).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async updateRoles(req: Request, res: Response) {  
        try {
            const roleService = container.resolve(RoleService);
            const roles = await roleService.updateRoles(parseInt(req.params.id), req.body);
            res.status(200).json(roles);
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async deleteRoles(req: Request, res: Response) { 
        try {
            const roleService = container.resolve(RoleService);
            const roles = await roleService.deleteRoles(parseInt(req.params.id));
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