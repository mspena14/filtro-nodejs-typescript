import { cartRouter } from './../routes/cartRoutes';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UserService, CartService } from '../services';



export default class UserController { 
    static async getAllUsers(req: Request, res: Response) {
        try {
            const userService = container.resolve(UserService);
            const users = await userService.getAllUsers();
            if (!users) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(users)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async getUsersById(req: Request, res: Response) { 
        try {
            const userService = container.resolve(UserService);
            const users = await userService.getUsersById(parseInt(req.params.id));
            if (!users) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(users)

        } catch (error) {
            res.status(500).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }
    
    static async createUsers(req: Request, res: Response) { 
        try {
            const userService = container.resolve(UserService);
            const cartService = container.resolve(CartService);
            const user = await userService.createUsers(req.body);
            if (user) {
                const userId: any = user.id
                const userCart = await cartService.createCarts({userId:userId})

                res.status(200).json({
                    message: "Data Fetched",
                    data: user,
                    cartData: userCart
                })
            }
           
        } catch (error) {
            res.status(400).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async updateUsers(req: Request, res: Response) {  
        try {
            const userService = container.resolve(UserService);
            const users = await userService.updateUsers(parseInt(req.params.id), req.body);
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({
                message: `There was an error proccesing the request`,
                error: error
            })
        }
    }

    static async deleteUsers(req: Request, res: Response) { 
        try {
            const userService = container.resolve(UserService);
            const users = await userService.deleteUsers(parseInt(req.params.id));
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