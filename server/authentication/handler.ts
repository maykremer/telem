import { Application } from "express";
import passport from "passport";
import config from "../config";
const { Strategy } = require("passport-shraga");

export class AuthenticationHandler {
  static initialize(app: Application) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(AuthenticationHandler.serialize);
    passport.deserializeUser(AuthenticationHandler.deserialize);

    passport.use(
      new Strategy(config.auth, (profile: any, done: any) => {
        done(null, profile);
      })
    );

    return passport.initialize();
  }

  static authenticate() {
    return passport.authenticate("shraga", {
      failureRedirect: "/failed",
      failureFlash: true,
    });
  }

  private static serialize(user: any, done: any) {
    done(undefined, user);
  }

  private static async deserialize(user: any, done: any) {
    try {
      done(undefined, user);
    } catch (err) {
      done(err, null);
    }
  }
}
