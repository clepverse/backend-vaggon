import { activitieValidation } from '../../validations/ActivitieValidation';
import { Request, Response } from 'express';
import { CreateActivitieUseCase } from './CreateActivitieUseCase';

export class CreateActivitieController {
  async handle(req: Request, res: Response) {
    await activitieValidation.validate(req.body);

    const { userId, name, description, start_date_and_time, end_date_and_time, status } = req.body;

    const createActivitieUseCase = new CreateActivitieUseCase();

    const result = await createActivitieUseCase.execute({
      userId,
      name,
      description,
      start_date_and_time,
      end_date_and_time,
      status,
    });

    return res.status(201).json(result);
  }
}
