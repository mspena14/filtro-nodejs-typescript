import { injectable } from 'tsyringe';
import { CartModel } from '../models';

@injectable()
export class CartRepository { 
    async findAll() { 
        return await CartModel.findAll();
    }

    async findById(id: number) { 
        return await CartModel.findByPk(id);
    }

    async create(cart: Partial<CartModel>) { 
        return await CartModel.create(cart);
    }

    async update(id: number, newCart: Partial<CartModel>) { 
        return await CartModel.update(newCart, { where: {id}})
    }

    async deleteById(id: number) {
        return await CartModel.destroy({where: {id: id}})
    }
}