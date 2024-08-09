import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { OrderService } from '../services';



export default class OrderController { 
    static async getAllOrders(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService); 
            const orders = await orderService.getAllOrders();
            if (!orders) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: orders
            })

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async getOrdersById(req: Request, res: Response) { 
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getOrdersById(parseInt(req.params.id));
            if (!orders) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(orders)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
    
    static async createOrders(req: Request, res: Response) { 
        try {
            const orderService = container.resolve(OrderService);
            
            const orders = await orderService.createOrders(req.body);
            console.log(orders.toJSON());
            res.status(201).json(orders)

        } catch (error) {
            res.status(400).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async updateOrders(req: Request, res: Response) { 
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.updateOrders(parseInt(req.params.id), req.body);
            res.status(200).json(orders);
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async deleteOrders(req: Request, res: Response) { 
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.deleteOrders(parseInt(req.params.id));
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