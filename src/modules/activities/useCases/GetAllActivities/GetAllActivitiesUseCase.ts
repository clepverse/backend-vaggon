import { Activitie } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { IGetAllActivitiesDTO } from '../../dtos/GetAllActivitiesDTO';

export class GetAllActivitiesUseCase {
  async execute({ user_id }: IGetAllActivitiesDTO): Promise<Activitie[]> {
    const activities = await prisma.activitie.findMany({
      where: {
        user_id,
      },
    });

    return activities;
  }
}
