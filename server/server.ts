import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import config from "./config";
import * as cors from 'cors';
import { AppRouter } from "./mainRouter";
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
import { AuthenticationHandler } from './authentication/hanlder';
import { AuthenticationRouter } from './authentication/router';


const SERVER_PORT: number = config.serverPort;

export class Server {
  app: express.Application;
  port: number = SERVER_PORT;
  connection: mongoose.Connection;
  urlConnection = "mongodb://localhost:27017/telem";
  
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(this.setHeaders);
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
    }));
    this.app.use(express.urlencoded({extended: true}));
    this.initAuthentication();
    this.app.use(AppRouter);
    this.app.use('/', express.static(path.join(__dirname, '../../client/dist/telem')));
    this.app.listen(SERVER_PORT, () => {
      console.log(`server is listening on port ${SERVER_PORT}`);
    });
    this.connection = mongoose.connection;
  }

  private setHeaders = (req: express.Request, res: express.Response ,next: express.NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type");
    next();
  };

  public static createServer(): Server {
    return new Server();
  }

  private initAuthentication() {
    AuthenticationHandler.initialize(this.app);
    this.app.use('/auth/', AuthenticationRouter);
}

  
}
