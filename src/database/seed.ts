import { prisma } from './PrismaClient';

async function Seed() {
  await prisma.user.createMany({
    data: [
      { login: 'clep1', password: '123456' },
      { login: 'clep2', password: '123456' },
      { login: 'clep3', password: '123456' },
      { login: 'clep4', password: '123456' },
      { login: 'clep5', password: '123456' },
      { login: 'clep6', password: '123456' },
      { login: 'clep7', password: '123456' },
      { login: 'clep8', password: '123456' },
    ],
  });
}
