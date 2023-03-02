import { Request, Response } from 'express';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  async handle(req: Request, res: Response) {
    const user_id = Number(req.params.id);

    const getUserUseCase = new GetUserUseCase();

    const result = await getUserUseCase.execute({ user_id });

    return res.status(201).json(result);
  }
}
