import { prisma } from './PrismaClient';
import bcrypt from 'bcrypt';

async function Seed() {
  const hashPassword = await bcrypt.hash('123456', 10);

  await prisma.user.createMany({
    data: [
      { login: 'clep1', password: hashPassword },
      { login: 'clep2', password: hashPassword },
      { login: 'clep3', password: hashPassword },
      { login: 'clep4', password: hashPassword },
      { login: 'clep5', password: hashPassword },
      { login: 'clep6', password: hashPassword },
    ],
  });
}
