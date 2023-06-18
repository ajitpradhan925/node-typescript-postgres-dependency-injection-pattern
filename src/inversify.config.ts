// inversify.config.ts
import { Container } from 'inversify';
import UserRepository from './repositories/UserRepository';
import { UserService } from './services/UserService';
import UserController from './controllers/UserController';

const container = new Container();

container.bind<UserRepository>(UserRepository).toSelf().inSingletonScope();
container.bind<UserService>(UserService).toSelf().inSingletonScope();
container.bind<UserController>(UserController).toSelf().inSingletonScope();


export default container;
