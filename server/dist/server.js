"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config_1 = require("./config");
const cors = require("cors");
const mainRouter_1 = require("./mainRouter");
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const hanlder_1 = require("./authentication/hanlder");
const router_1 = require("./authentication/router");
const SERVER_PORT = config_1.default.serverPort;
class Server {
    constructor() {
        this.port = SERVER_PORT;
        this.urlConnection = "mongodb://localhost:27017/telem";
        this.setHeaders = (req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type");
            next();
        };
        this.app = express();
        this.app.use(this.setHeaders);
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
        }));
        this.initAuthentication();
        this.app.use(mainRouter_1.AppRouter);
        this.app.use('/', express.static(path.join(__dirname, '../../client/dist/telem')));
        this.app.listen(SERVER_PORT, () => {
            console.log(`server is listening on port ${SERVER_PORT}`);
        });
        this.connection = mongoose.connection;
    }
    static createServer() {
        return new Server();
    }
    initAuthentication() {
        hanlder_1.AuthenticationHandler.initialize(this.app);
        this.app.use('/auth/', router_1.AuthenticationRouter);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map