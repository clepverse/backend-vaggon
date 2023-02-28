import { Activitie } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { IGetActivitieDTO } from '../../dtos/GetActivitieDTO';

export class GetActivitieUseCase {
  async execute({ user_id }: IGetActivitieDTO): Promise<Activitie[]> {
    const activities = await prisma.activitie.findMany({
      where: {
        user_id,
      },
    });

    return activities;
  }
}
