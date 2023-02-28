import { Router } from 'express';
import { CreateActivitieController } from '../modules/activities/useCases/createActivitie/CreateActivitieController';

const createActivitieController = new CreateActivitieController();

const activitieRoutes = Router();

activitieRoutes.post('/', createActivitieController.handle);

export { activitieRoutes };
