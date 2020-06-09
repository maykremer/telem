import * as passport from "passport";
const { Strategy } = require("passport-shraga");
import config from "../config";
import { Application } from "express";

export class AuthenticationHandler {
    static user: any;

    static initialize(app: Application) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.serializeUser((user: any, cb: any) => {
            this.user = user;
            console.log(user.name);
            console.log(user.iat);

            cb(undefined, user.id);
        });

        passport.deserializeUser((id, cb) => {
            try {
                const user = { uid: '205707219' };
                cb(undefined, user);
            } catch (err) {
                cb(err, null);
            }
        });

        const { shragaURL, callbackURL } = config.auth;
        passport.use(new Strategy({ shragaURL, callbackURL }, (profile: any, done: any) => {
            done(null, profile);
        }));

    }
}
