import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../database/PrismaClient';
import { IAuthenticateUserDTO, IResponseDTO } from '../../dtos/AuthenticateUserDTO';
import { sign } from 'jsonwebtoken';

import { compare } from 'bcrypt';

export class AuthenticateUserUseCase {
  async execute({ login, password }: IAuthenticateUserDTO): Promise<IResponseDTO> {
    // Verifica se usúario existe
    const user = await prisma.user.findUnique({
      where: {
        login,
      },
    });

    if (!user) {
      // Erro
      throw new AppError('E-mail or password incorrect.');
    }

    // Compara a senha criptografada com a do User
    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      // Erro
      throw new AppError('E-mail or password incorrect.');
    }

    const token = sign({}, 'b51790ca6e8bec26e28d3f22c843c384', {
      subject: String(user.id),
      expiresIn: '1d',
    });

    const tokenReturn: IResponseDTO = {
      user: {
        id: user.id,
        login: user.login,
      },
      token,
    };

    return tokenReturn;
  }
}
