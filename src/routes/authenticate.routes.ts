import { Router } from 'express';
import { AuthenticateUserController } from '../modules/users/useCases/authenticateUser/AuthenticateUserController';

const authenticateUserController = new AuthenticateUserController();

const authenticateRoutes = Router();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

export { authenticateRoutes };
