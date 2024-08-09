import { Router } from 'express';
import UserController from '../controllers/userController';

export const userRouter = Router();

userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUsersById);
userRouter.post('/', UserController.createUsers);
userRouter.put('/:id', UserController.updateUsers);
userRouter.delete('/:id', UserController.deleteUsers);
    
