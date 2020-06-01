import { Router } from 'express';
import passport = require('passport');

const AuthenticationRouter = Router();

AuthenticationRouter.get('/login', passport.authenticate("shraga",{  failureRedirect: '/failed',
failureFlash: true
}));
AuthenticationRouter.post('/callback', passport.authenticate("shraga",{  failureRedirect: '/failed',
failureFlash: true
}), (req, res) => res.redirect('/'));

export { AuthenticationRouter };
