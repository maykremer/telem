"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const mongoose = __importStar(require("mongoose"));
const personRouter_1 = __importDefault(require("./personRouter"));
const config_1 = __importDefault(require("./config"));
const middleware_1 = require("./authentication/middleware");
const handler_1 = require("./authentication/handler");
const cors_1 = __importDefault(require("cors"));
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const path = require('path');
// const shraga = require("./passport.js");
const app = express_1.default();
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
        this.app = express_1.default();
        this.app.use('/', express_1.default.static(path.join(__dirname, '../../client/dist/telem')));
        this.app.use(cors_1.default());
        this.app.use(this.setHeaders);
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(passport.initialize());
        this.app.use(passport.session({
            secret: config_1.default.auth.secret,
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
        this.app.get('/user', middleware_1.AuthenticationMiddleware.requireAuth, (req, res, next) => res.send(req.user));
        this.app.use(personRouter_1.default);
        this.app.listen(SERVER_PORT, () => {
            console.log(`server is listening on port ${SERVER_PORT}`);
        });
        this.connection = mongoose.connection;
    }
    static createServer() {
        return new Server();
    }
    initializeAuthenticator() {
        handler_1.AuthenticationHandler.initialize(this.app);
        // this.app.use('/auth/', AuthenticationRouter);
    }
}
exports.Server = Server;
