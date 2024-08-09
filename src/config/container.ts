import { container } from 'tsyringe'
import {ProductService, RoleService, PermissionService, ProductCartService, UserService, EntityService, OrderService, CartService } from '../services'
import {ProductRepository, ProductCartRepository, RoleRepository, PermissionRepository, CartRepository, UserRepository, OrderRepository, EntityRepository} from '../repositories'



container.registerSingleton<ProductCartRepository>(ProductCartRepository);
container.registerSingleton<ProductCartService>(ProductCartService);

container.registerSingleton<EntityRepository>(EntityRepository);
container.registerSingleton<EntityService>(EntityService);

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<PermissionRepository>(PermissionRepository);
container.registerSingleton<PermissionService>(PermissionService);

container.registerSingleton<RoleRepository>(RoleRepository);
container.registerSingleton<RoleService>(RoleService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);

