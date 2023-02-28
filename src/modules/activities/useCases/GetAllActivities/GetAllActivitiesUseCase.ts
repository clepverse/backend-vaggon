import { Activity } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { IGetAllActivitiesDTO } from '../../dtos/GetAllActivitiesDTO';

export class GetAllActivitiesUseCase {
  async execute({ user_id }: IGetAllActivitiesDTO): Promise<Activity[]> {
    const activities = await prisma.activity.findMany({
      where: {
        user_id,
      },
    });

    return activities;
  }
}
