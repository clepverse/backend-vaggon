import bcrypt from 'bcrypt';
import { createUserValidation } from '../../validations/CreateUserValidation';
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    await createUserValidation.validate(req.body);

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;

    const { login, password } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ login, password });

    return res.status(201).json(result);
  }
}
