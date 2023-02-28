import { Router } from 'express';
import { userRoutes } from './user.routes';
import { activitieRoutes } from './activitie.routes';

const routes = Router();

routes.use('/login', userRoutes);
routes.use('/activities', activitieRoutes);

export { routes };
