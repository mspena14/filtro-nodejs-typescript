import { Sequelize } from "sequelize-typescript";
import { ProductModel, UserModel, OrderModel, CartModel, ProductCartModel, EntityModel, PermissionModel, RolModel } from '../models'; // importing the entities
import { config } from 'dotenv';

config(); 

const sequelize: Sequelize = new Sequelize({ 
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [ProductModel, UserModel, OrderModel, CartModel, ProductCartModel, EntityModel, PermissionModel, RolModel]
})

export default sequelize;
