import { Router } from 'express';
import { userRoutes } from './user.routes';

const routes = Router();

routes.use('/cadastro', userRoutes);

export { routes };
