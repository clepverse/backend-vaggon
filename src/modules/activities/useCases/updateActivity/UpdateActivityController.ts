import { Request, Response } from 'express';
import { updateActivityValidation } from '../../validations/UpdateActivityValidation';
import { UpdateActivityUseCase } from './UpdateActivityUseCase';

export class UpdateActivityController {
  async handle(req: Request, res: Response) {
    await updateActivityValidation.validate(req.body);

    const id_activity = Number(req.params.id);

    const { name, description, start_date_and_time, end_date_and_time, status } = req.body;

    const updateActivityUseCase = new UpdateActivityUseCase();

    const result = await updateActivityUseCase.execute({
      id_activity,
      name,
      description,
      start_date_and_time,
      end_date_and_time,
      status,
    });

    return res.status(201).json(result);
  }
}
