import { prisma } from '../../../../database/PrismaClient';
import { AppError } from '../../../../errors/AppError';
import { IDeleteActivityDTO } from '../../dtos/DeleteActivityDTO';

export class DeleteActivityUseCase {
  async execute({ id_activity }: IDeleteActivityDTO): Promise<void> {
    const checksIfTheActivityDoesNotExists = await prisma.activity.findUnique({
      where: {
        id: id_activity,
      },
    });

    if (!checksIfTheActivityDoesNotExists) {
      // Erro
      throw new AppError('Activity does not exist.');
    }

    await prisma.activity.delete({
      where: {
        id: id_activity,
      },
    });
  }
}
