import 'express-async-errors';
import { AppError } from './errors/AppError';

import express, { NextFunction, Request, Response } from 'express';

import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error: ${err.message}`,
  });
});

app.listen(3333, () => console.log('Running in port 3333!'));
