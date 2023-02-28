import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError';
import { verify } from 'jsonwebtoken';
import { prisma } from '../database/PrismaClient';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization as string;

  if (!authHeader) {
    throw new AppError('Token missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'b51790ca6e8bec26e28d3f22c843c384') as IPayload;

    const user = prisma.user.findMany({
      where: {
        id: Number(user_id),
      },
    });

    if (!user) {
      throw new AppError('User does not exists.');
    }

    next();
  } catch {
    throw new AppError('Invalid token.');
  }
}
