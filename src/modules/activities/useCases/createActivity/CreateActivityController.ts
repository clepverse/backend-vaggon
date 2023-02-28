import { activityValidation } from '../../validations/ActivityValidation';
import { Request, Response } from 'express';
import { CreateActivityUseCase } from './CreateActivityUseCase';

export class CreateActivityController {
  async handle(req: Request, res: Response) {
    await activityValidation.validate(req.body);

    const { user_id, name, description, start_date_and_time, end_date_and_time, status } = req.body;

    const createActivityUseCase = new CreateActivityUseCase();

    const result = await createActivityUseCase.execute({
      user_id,
      name,
      description,
      start_date_and_time,
      end_date_and_time,
      status,
    });

    return res.status(201).json(result);
  }
}
