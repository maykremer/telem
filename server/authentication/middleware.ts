import { Request, Response, NextFunction } from 'express';

export class AuthenticationMiddleware {
    static requireAuth(req: Request, res: Response, next: NextFunction) {
        console.log("auth");
        
        if (req.user) {
            return next();
        }

        // return res.redirect('/auth/login');
    }
}
