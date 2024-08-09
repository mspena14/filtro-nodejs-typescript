import { Router } from 'express';
import ProductController from '../controllers/productController';

export const productRouter = Router();

productRouter.get('/', ProductController.getAllProducts);
productRouter.get('/:id', ProductController.getProductsById);
productRouter.post('/', ProductController.createProducts);
productRouter.put('/:id', ProductController.updateProducts);
productRouter.delete('/:id', ProductController.deleteProducts);