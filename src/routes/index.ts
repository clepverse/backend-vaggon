import { Router } from 'express';
import { userRoutes } from './user.routes';
import { activitieRoutes } from './activitie.routes';

const routes = Router();

routes.use('/cadastro', userRoutes);
routes.use('/atividades', activitieRoutes);

export { routes };
