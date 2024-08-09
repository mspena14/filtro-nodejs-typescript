import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ProductCartService } from '../services';



export default class ProductCartController { 
    static async getAllProductCarts(req: Request, res: Response) {
        try {
            const productCartService = container.resolve(ProductCartService); 
            const productCarts = await productCartService.getAllProductCarts();
            if (!productCarts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: productCarts
            })

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async getProductCartsById(req: Request, res: Response) { 
        try {
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.getProductCartsById(parseInt(req.params.id));
            if (!productCarts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(productCarts)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
    
    static async createProductCarts(req: Request, res: Response) { 
        try {
            const productCartService = container.resolve(ProductCartService);
            
            const productCarts = await productCartService.createProductCarts(req.body);
            console.log(productCarts.toJSON());
            res.status(201).json(productCarts)

        } catch (error) {
            res.status(400).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async updateProductCarts(req: Request, res: Response) {  
        try {
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.updateProductCarts(parseInt(req.params.id), req.body);
            res.status(200).json(productCarts);
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async deleteProductCarts(req: Request, res: Response) { 
        try {
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.deleteProductCarts(parseInt(req.params.id));
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