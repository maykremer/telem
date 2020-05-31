import express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import PersonRouter from "./personRouter";
import config from "./config";
import { AuthenticationMiddleware } from "./authentication/middleware";
import { AuthenticationHandler } from "./authentication/handler";
import { AuthenticationRouter } from "./authentication/router";
import cors from 'cors';
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const path = require('path');

// const shraga = require("./passport.js");

const app = express();
const SERVER_PORT: number = config.serverPort;

export class Server {
  app: express.Application;
  port: number = SERVER_PORT;
  connection: mongoose.Connection;
  urlConnection = "mongodb://localhost:27017/telem";
  
  constructor() {
    this.app = express();
    this.app.use('/', express.static(path.join(__dirname, '../../client/dist/telem')));
    this.app.use(cors());
    this.app.use(this.setHeaders);
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(passport.initialize());
    this.app.use(passport.session({
      secret: config.auth.secret,
      resave: false,
      saveUninitialized: true
    }));
    // console.log("asd");
    this.initializeAuthenticator();
    // this.app.use((req, res, next) => {
    //   if (!req.user)
    //   res.redirect("/auth")
    //   else
    //   next();
    // });
    this.app.get('/user', AuthenticationMiddleware.requireAuth, (req: express.Request, res: express.Response, next: express.NextFunction) => res.send(req.user));
    this.app.use(PersonRouter);
    this.app.listen(SERVER_PORT, () => {
      console.log(`server is listening on port ${SERVER_PORT}`);
    });
    this.connection = mongoose.connection;
  }

  private setHeaders = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, X-Requested-With, Content-Type"
    );
    next();
  };

  public static createServer(): Server {
    return new Server();
  }
  
  private initializeAuthenticator() {
    AuthenticationHandler.initialize(this.app);
    // this.app.use('/auth/', AuthenticationRouter);
}
}
