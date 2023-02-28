import { Router } from 'express';
import { CreateActivitieController } from '../modules/activities/useCases/createActivitie/CreateActivitieController';
import { GetActivitieController } from '../modules/activities/useCases/CreateActivitieController.ts/GetActivitieController';

const createActivitieController = new CreateActivitieController();
const getActivitieController = new GetActivitieController();

const activitieRoutes = Router();

activitieRoutes.post('/', createActivitieController.handle);
activitieRoutes.get('/todas', getActivitieController.handle);

export { activitieRoutes };
