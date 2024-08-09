import { Router } from 'express';
import EntityController from '../controllers/entityController';

export const entityRouter = Router();

entityRouter.get('/', EntityController.getAllEntities);
entityRouter.get('/:id', EntityController.getEntitiesById);
entityRouter.post('/', EntityController.createEntities);
entityRouter.put('/:id', EntityController.updateEntities);
entityRouter.delete('/:id', EntityController.deleteEntities);
    