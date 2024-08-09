import { injectable } from 'tsyringe';
import { OrderModel } from '../models';

@injectable()
export class OrderRepository { 
    async findAll() { 
        return await OrderModel.findAll();
    }

    async findById(id: number) {
        return await OrderModel.findByPk(id);
    }

    async create(order: Partial<OrderModel>) {
        return await OrderModel.create(order);
    }

    async update(id: number, newUser: Partial<OrderModel>){
        return await OrderModel.update(newUser, { where: {id}})
    }

    async deleteById(id: number){
        return await OrderModel.destroy({where: {id: id}})
    }
}