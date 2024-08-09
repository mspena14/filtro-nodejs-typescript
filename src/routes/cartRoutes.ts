import { Router } from 'express';
import CartController from '../controllers/cartController';

export const cartRouter = Router();

cartRouter.get('/', CartController.getAllCarts);
cartRouter.get('/:id', CartController.getCartsById);
cartRouter.post('/', CartController.createCarts);
cartRouter.put('/:id', CartController.updateCarts);
cartRouter.delete('/:id', CartController.deleteCarts);
    
