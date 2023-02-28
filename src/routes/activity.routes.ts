import { Router } from 'express';
import { CreateActivityController } from '../modules/activities/useCases/createActivity/CreateActivityController';
import { GetAllActivitiesController } from '../modules/activities/useCases/GetAllActivities/GetAllActivitiesController';
import { UpdateActivityController } from '../modules/activities/useCases/updateActivity/UpdateActivityController';

const createActivityController = new CreateActivityController();
const getAllActivitiesController = new GetAllActivitiesController();
const updateActivityController = new UpdateActivityController();

const activityRoutes = Router();

activityRoutes.post('/', createActivityController.handle);
activityRoutes.get('/all', getAllActivitiesController.handle);
activityRoutes.put('/:id', updateActivityController.handle);

export { activityRoutes };
