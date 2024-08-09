import {CartRepository} from '../repositories';
import { injectable, inject } from 'tsyringe';
import { CartModel } from "../models";

@injectable()
export class CartService { 
    constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

    async getAllCarts() { 
        return await this.cartRepository.findAll(); 
    }

    async getCartsById(id: number) { 
        return await this.cartRepository.findById(id);
    }

    async createCarts(cart: Partial<CartModel>) { 
        return await this.cartRepository.create(cart);
    }

    async updateCarts(id: number, cart: Partial<CartModel>) {
        return await this.cartRepository.update(id, cart);
    }

    async deleteCarts(id: number) { 
        return await this.cartRepository.deleteById(id);
    }
}