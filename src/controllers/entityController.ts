import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EntityService } from '../services/entityService';



export default class EntityController { 
    static async getAllEntities(req: Request, res: Response) {
        try {
            const entityService = container.resolve(EntityService); 
            const entities = await entityService.getAllEntities();
            if (!entities) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: entities
            })

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async getEntitiesById(req: Request, res: Response) { 
        try {
            const entityService = container.resolve(EntityService);
            const entities = await entityService.getEntitiesById(parseInt(req.params.id));
            if (!entities) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(entities)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
    
    static async createEntities(req: Request, res: Response) {
        try {
            const entityService = container.resolve(EntityService);
            
            const entities = await entityService.createEntities(req.body);
            console.log(entities.toJSON());
            res.status(201).json(entities)

        } catch (error) {
            res.status(400).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async updateEntities(req: Request, res: Response) {  
        try {
            const entityService = container.resolve(EntityService);
            const entities = await entityService.updateEntities(parseInt(req.params.id), req.body);
            res.status(200).json(entities);
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async deleteEntities(req: Request, res: Response) { 
        try {
            const entityService = container.resolve(EntityService);
            const entities = await entityService.deleteEntities(parseInt(req.params.id));
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