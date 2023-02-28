import { Status } from '@prisma/client';

export interface IUpdateActivityDTO {
  user_id: number;
  name?: string;
  description?: string;
  start_date_and_time?: string;
  end_date_and_time?: string;
  status?: Status;
}
