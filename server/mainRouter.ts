import { Router } from 'express';
import personRouter from './personRouter';
import { AuthenticationMiddleware } from './authentication/middleware';

const AppRouter: Router = Router();

AppRouter.use('/', AuthenticationMiddleware.requireAuth, personRouter);

export { AppRouter };
