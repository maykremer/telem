"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationHandler = void 0;
const passport_1 = __importDefault(require("passport"));
const config_1 = __importDefault(require("../config"));
const { Strategy } = require("passport-shraga");
class AuthenticationHandler {
    static initialize(app) {
        app.use(passport_1.default.initialize());
        app.use(passport_1.default.session());
        passport_1.default.serializeUser(AuthenticationHandler.serialize);
        passport_1.default.deserializeUser(AuthenticationHandler.deserialize);
        passport_1.default.use(new Strategy(config_1.default.auth, (profile, done) => {
            done(null, profile);
        }));
        return passport_1.default.initialize();
    }
    static authenticate() {
        return passport_1.default.authenticate("shraga", {
            failureRedirect: "/failed",
            failureFlash: true,
        });
    }
    static serialize(user, done) {
        done(undefined, user);
    }
    static async deserialize(user, done) {
        try {
            done(undefined, user);
        }
        catch (err) {
            done(err, null);
        }
    }
}
exports.AuthenticationHandler = AuthenticationHandler;
