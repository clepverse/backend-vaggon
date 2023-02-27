import { User } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../database/PrismaClient';
import { ICreateUserDTO } from '../../dtos/CreateUserDTO';

type UserType = Omit<User, 'password'>;

export class CreateUserUseCase {
  async execute({ login, password }: ICreateUserDTO): Promise<UserType> {
    // verifica se o usuário já existe
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        login,
      },
    });

    if (userAlreadyExist) {
      // Erro
      throw new AppError('User already exists.');
    }

    // Cria o usuário
    const user = await prisma.user.create({
      data: {
        login,
        password,
      },
      select: {
        id: true,
        login: true,
        created_at: true,
        updated_at: true,
      },
    });

    return user;
  }
}
