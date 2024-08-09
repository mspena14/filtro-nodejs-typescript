import { Router } from 'express';
import OrderController from '../controllers/orderController';

export const orderRouter = Router();

orderRouter.get('/', OrderController.getAllOrders);
orderRouter.get('/:id', OrderController.getOrdersById);
orderRouter.post('/', OrderController.createOrders);
orderRouter.put('/:id', OrderController.updateOrders);
orderRouter.delete('/:id', OrderController.deleteOrders);
    
