import { Activity } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { ICreateActivityDTO } from '../../dtos/CreateActivityDTO';

export class CreateActivityUseCase {
  async execute({
    user_id,
    name,
    description,
    start_date_and_time,
    end_date_and_time,
    status,
  }: ICreateActivityDTO): Promise<Activity> {
    // Pega o ID do usuário
    const connectUserId = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });

    // Cria a atividade atrelada ao ID do usuário
    const activity = await prisma.activity.create({
      data: {
        name,
        description,
        start_date_and_time,
        end_date_and_time,
        status,
        users: {
          connect: {
            id: connectUserId?.id,
          },
        },
      },
    });

    return activity;
  }
}
