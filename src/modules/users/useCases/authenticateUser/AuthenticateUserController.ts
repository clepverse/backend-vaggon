import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    {
      const { login, password } = req.body;

      const authenticateUserUseCase = new AuthenticateUserUseCase();

      const token = await authenticateUserUseCase.execute({ login, password });

      return res.status(201).json(token);
    }
  }
}
