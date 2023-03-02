import { User } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../database/PrismaClient';
import { IGetUserDTO } from '../../dtos/GetUserDTO';

type UserType = Omit<User, 'password'>;
interface UserTypeResponse extends UserType {
  activities: Array<String>;
}

export class GetUserUseCase {
  async execute({ user_id }: IGetUserDTO) {
    // verifica se o usuário já existe
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
      select: {
        password: false,
        login: true,
        id: true,
        activities: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!userAlreadyExist) {
      // Erro
      throw new AppError('User not already exists.');
    }

    return userAlreadyExist;
  }
}
