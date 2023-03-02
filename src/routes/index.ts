import { Router } from 'express';
import { userRoutes } from './user.routes';
import { activityRoutes } from './activity.routes';
import { authenticateRoutes } from './authenticate.routes';

const routes = Router();

routes.use('/', userRoutes);
routes.use('/activity', activityRoutes);
routes.use(authenticateRoutes);

export { routes };
