import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateActivityController } from '../modules/activities/useCases/createActivity/CreateActivityController';
import { DeleteActivityController } from '../modules/activities/useCases/deleteActivity/DeleteActivityController';
import { GetAllActivitiesController } from '../modules/activities/useCases/GetAllActivities/GetAllActivitiesController';
import { UpdateActivityController } from '../modules/activities/useCases/updateActivity/UpdateActivityController';

const createActivityController = new CreateActivityController();
const getAllActivitiesController = new GetAllActivitiesController();
const updateActivityController = new UpdateActivityController();
const deleteActivityController = new DeleteActivityController();

const activityRoutes = Router();

activityRoutes.use(ensureAuthenticated);
activityRoutes.post('/', createActivityController.handle);
activityRoutes.get('/', getAllActivitiesController.handle);
activityRoutes.put('/:id', updateActivityController.handle);
activityRoutes.delete('/:id', deleteActivityController.handle);

export { activityRoutes };
