import { Router } from 'express';
import { userRoutes } from './user.routes';
import { activityRoutes } from './activity.routes';

const routes = Router();

routes.use('/signup', userRoutes);
routes.use('/activity', activityRoutes);

export { routes };
