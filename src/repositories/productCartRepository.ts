import { injectable } from 'tsyringe';
import { ProductCartModel } from '../models';

@injectable()
export class ProductCartRepository { 
    async findAll() { 
        return await ProductCartModel.findAll();
    }

    async findById(id: number) { 
        return await ProductCartModel.findByPk(id);
    }

    async create(productCart: Partial<ProductCartModel>) { 
        return await ProductCartModel.create(productCart);
    }

    async update(id: number, newProductCart: Partial<ProductCartModel>) { 
        return await ProductCartModel.update(newProductCart, { where: {id}})
    }

    async deleteById(id: number) {
        return await ProductCartModel.destroy({where: {id: id}})
    }
}

