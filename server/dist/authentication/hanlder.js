"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const { Strategy } = require("passport-shraga");
const config_1 = require("../config");
class AuthenticationHandler {
    static initialize(app) {
        app.use(passport.initialize());
        app.use(passport.session());
        passport.serializeUser((user, cb) => {
            this.user = user;
            console.log(user.name);
            console.log(user.iat);
            cb(undefined, user.id);
        });
        passport.deserializeUser((id, cb) => {
            // console.log(id);
            try {
                const user = { uid: '205707219' };
                cb(undefined, user);
            }
            catch (err) {
                cb(err, null);
            }
        });
        const { shragaURL, callbackURL } = config_1.default.auth;
        passport.use(new Strategy({ shragaURL, callbackURL }, (profile, done) => {
            // console.log('test')
            done(null, profile);
        }));
    }
}
exports.AuthenticationHandler = AuthenticationHandler;
//# sourceMappingURL=hanlder.js.map