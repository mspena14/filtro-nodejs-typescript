import { ProductRepository } from '../repositories/productRepository';
import { injectable, inject } from 'tsyringe';
import { ProductModel } from "../models";

@injectable()
export class ProductService { 
    constructor(@inject(ProductRepository) private productRepository: ProductRepository) {}

    async getAllProducts() { 
        return await this.productRepository.findAll();
    }

    async getProductsById(id: number) { 
        return await this.productRepository.findById(id);
    }

    async createProducts(product: Partial<ProductModel>) { 
        return await this.productRepository.create(product);
    }

    async updateProducts(id: number, product: Partial<ProductModel>) { 
        return await this.productRepository.update(id, product);
    }

    async deleteProducts(id: number) { 
        return await this.productRepository.deleteById(id);
    }
}