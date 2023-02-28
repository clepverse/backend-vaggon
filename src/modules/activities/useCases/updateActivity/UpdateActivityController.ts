import { Request, Response } from 'express';
import { activityValidation } from '../../validations/ActivityValidation';
import { UpdateActivityUseCase } from './updateActivityUseCase';

export class UpdateActivityController {
  async handle(req: Request, res: Response) {
    await activityValidation.validate(req.body);

    const user_id = Number(req.params.id);

    const { name, description, start_date_and_time, end_date_and_time, status } = req.body;

    const updateActivityUseCase = new UpdateActivityUseCase();

    const result = await updateActivityUseCase.execute({
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
