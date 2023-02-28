import { Request, Response } from 'express';
import { DeleteActivityUseCase } from './DeleteActivityUseCase';

export class DeleteActivityController {
  async handle(req: Request, res: Response) {
    const id_activity = Number(req.params.id);

    const deleteActivityUseCase = new DeleteActivityUseCase();

    await deleteActivityUseCase.execute({
      id_activity,
    });

    return res.status(201).send('The activity has been deleted');
  }
}
