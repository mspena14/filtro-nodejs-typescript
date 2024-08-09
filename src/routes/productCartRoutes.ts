import { Router } from 'express';
import ProductCartController from '../controllers/productCartController';

export const productCartRouter = Router();

productCartRouter.get('/', ProductCartController.getAllProductCarts);
productCartRouter.get('/:id', ProductCartController.getProductCartsById);
productCartRouter.post('/', ProductCartController.createProductCarts);
productCartRouter.put('/:id', ProductCartController.updateProductCarts);
productCartRouter.delete('/:id', ProductCartController.deleteProductCarts);
    
