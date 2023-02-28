import { Request, Response } from 'express';
import { GetAllActivitiesUseCase } from './GetAllActivitiesUseCase';

export class GetAllActivitiesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.body;

    const getAllActivitiesUseCase = new GetAllActivitiesUseCase();

    const result = await getAllActivitiesUseCase.execute({
      user_id,
    });

    return res.status(201).json(result);
  }
}
