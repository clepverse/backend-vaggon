import { Activitie } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { ICreateActivitieDTO } from '../../dtos/CreateActivitieDTO';

export class CreateActivitieUseCase {
  async execute({
    user_id,
    name,
    description,
    start_date_and_time,
    end_date_and_time,
    status,
  }: ICreateActivitieDTO): Promise<Activitie> {
    // Pega o ID do usuário
    const getUserId = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });

    // Cria a atividade atrelada ao ID do usuário
    const activitie = await prisma.activitie.create({
      data: {
        name,
        description,
        start_date_and_time,
        end_date_and_time,
        status,
        users: {
          connect: {
            id: getUserId?.id,
          },
        },
      },
    });

    return activitie;
  }
}
