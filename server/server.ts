import express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import PersonRouter from "./personRouter";
import config from "./config";
import cors from 'cors';
const path = require('path');

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
  
}
