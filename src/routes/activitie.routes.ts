import { Router } from 'express';
import { CreateActivitieController } from '../modules/activities/useCases/createActivitie/CreateActivitieController';
import { GetAllActivitiesController } from '../modules/activities/useCases/GetAllActivities/GetAllActivitiesController';

const createActivitieController = new CreateActivitieController();
const getAllActivitieController = new GetAllActivitiesController();

const activitieRoutes = Router();

activitieRoutes.post('/', createActivitieController.handle);
activitieRoutes.get('/all', getAllActivitieController.handle);

export { activitieRoutes };
