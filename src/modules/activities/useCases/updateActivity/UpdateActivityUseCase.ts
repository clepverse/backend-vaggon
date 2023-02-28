import { Activity } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { IUpdateActivityDTO } from '../../dtos/UpdateActivityDTO';

export class UpdateActivityUseCase {
  async execute({
    user_id,
    name,
    description,
    start_date_and_time,
    end_date_and_time,
    status,
  }: IUpdateActivityDTO): Promise<Activity> {
    const updatedActivity = await prisma.activity.update({
      where: {
        id: user_id,
      },
      data: {
        name,
        description,
        start_date_and_time,
        end_date_and_time,
        status,
      },
    });

    return updatedActivity;
  }
}
