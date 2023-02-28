import { Router } from 'express';
import { CreateActivityController } from '../modules/activities/useCases/createActivity/CreateActivityController';
import { GetAllActivitiesController } from '../modules/activities/useCases/GetAllActivities/GetAllActivitiesController';

const createActivityController = new CreateActivityController();
const getAllActivitiesController = new GetAllActivitiesController();

const activityRoutes = Router();

activityRoutes.post('/', createActivityController.handle);
activityRoutes.get('/all', getAllActivitiesController.handle);

export { activityRoutes };
