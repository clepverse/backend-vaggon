import { Request, Response } from 'express';
import { GetActivitieUseCase } from './GetActivitieUseCase';

export class GetActivitieController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const getActivitieUseCase = new GetActivitieUseCase();

    const result = await getActivitieUseCase.execute({
      user_id,
    });

    return res.status(201).json(result);
  }
}
