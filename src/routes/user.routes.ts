import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { GetUserController } from '../modules/users/useCases/getUser/GetUserController';

const createUserController = new CreateUserController();
const getUserController = new GetUserController();

const userRoutes = Router();

userRoutes.post('/signup', createUserController.handle);
userRoutes.get('/me/:id', ensureAuthenticated, getUserController.handle);

export { userRoutes };
