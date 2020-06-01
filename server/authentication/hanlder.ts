import * as passport from "passport";
const { Strategy } = require("passport-shraga");
import config from "../config";
import { Application } from "express";

export class AuthenticationHandler {
    static initialize(app: Application) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.serializeUser((user: any, cb: any) => {
            console.log(user);
            cb(undefined, user.id);
        });

        passport.deserializeUser((id, cb) => {
            console.log(id);
            try {
                const user = { uid: '205707219' };
                cb(undefined, user);
            } catch (err) {
                cb(err, null);
            }
        });

        const { shragaURL, callbackURL } = config.auth;
        passport.use(new Strategy({ shragaURL, callbackURL }, (profile: any, done: any) => {
            console.log('test')
            done(null, profile);
        }));

    }
}
