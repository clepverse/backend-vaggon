import { Activity } from '@prisma/client';

export interface IAuthenticateUserDTO {
  login: string;
  password: string;
}

export interface IResponseDTO {
  user: {
    id: number;
    login: string;
    activities: Activity[];
  };
  token: string;
}
