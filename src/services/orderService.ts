import { OrderRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { OrderModel } from "../models";

@injectable()
export class OrderService { 
    constructor(@inject(OrderRepository) private orderRepository: OrderRepository) {}

    async getAllOrders() { 
        return await this.orderRepository.findAll(); 
    }

    async getOrdersById(id: number) { 
        return await this.orderRepository.findById(id);
    }

    async createOrders(order: Partial<OrderModel>) { 
        return await this.orderRepository.create(order);
    }

    async updateOrders(id: number, order: Partial<OrderModel>) { 
        return await this.orderRepository.update(id, order);
    }

    async deleteOrders(id: number) { 
        return await this.orderRepository.deleteById(id);
    }
}

