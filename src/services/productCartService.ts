import { ProductCartRepository } from '../repositories/productCartRepository';
import { injectable, inject } from 'tsyringe';
import { ProductCartModel } from "../models";

@injectable()
export class ProductCartService { 
    constructor(@inject(ProductCartRepository) private productCartRepository: ProductCartRepository) {}

    async getAllProductCarts() { 
        return await this.productCartRepository.findAll(); 
    }

    async getProductCartsById(id: number) { 
        return await this.productCartRepository.findById(id);
    }

    async createProductCarts(productCart: Partial<ProductCartModel>) {
        return await this.productCartRepository.create(productCart);
    }

    async updateProductCarts(id: number, productCart: Partial<ProductCartModel>) { 
        return await this.productCartRepository.update(id, productCart);
    }

    async deleteProductCarts(id: number) { 
        return await this.productCartRepository.deleteById(id);
    }
}
