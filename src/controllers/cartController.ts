import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CartService } from '../services';



export default class CartController { 
    static async getAllCarts(req: Request, res: Response) {
        try {
            
        } catch (error) {
            
        }
        try {
            const cartService = container.resolve(CartService); 
            const carts = await cartService.getAllCarts();
            if (!carts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: carts
            })

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async getCartsById(req: Request, res: Response) { 
        try {
            const cartService = container.resolve(CartService);
            const carts = await cartService.getCartsById(parseInt(req.params.id));
            if (!carts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(carts)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
    
    static async createCarts(req: Request, res: Response) { 
        try {
            const cartService = container.resolve(CartService);
            
            const carts = await cartService.createCarts(req.body);
            console.log(carts.toJSON());
            res.status(201).json(carts)

        } catch (error) {
            res.status(400).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async updateCarts(req: Request, res: Response) { 
        try {
            const cartService = container.resolve(CartService);
            const carts = await cartService.updateCarts(parseInt(req.params.id), req.body);
            res.status(200).json(carts);
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async deleteCarts(req: Request, res: Response) { 
        try {
            const cartService = container.resolve(CartService);
            const carts = await cartService.deleteCarts(parseInt(req.params.id));
            res.status(200).json({
                nessage: "Cart deleted successfully"
            });
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
}