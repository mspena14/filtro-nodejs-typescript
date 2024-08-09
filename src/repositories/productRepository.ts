import { injectable } from 'tsyringe';
import { ProductModel } from '../models';

@injectable()
export class ProductRepository { 
    async findAll() { 
        return await ProductModel.findAll();
    }

    async findById(id: number) { 
        return await ProductModel.findByPk(id);
    }

    async create(product: Partial<ProductModel>) { 
        return await ProductModel.create(product);
    }

    async update(id: number, newProductCart: Partial<ProductModel>) { 
        return await ProductModel.update(newProductCart, { where: {id}})
    }

    async deleteById(id: number) {
        return await ProductModel.destroy({where: {id: id}})
    }
}