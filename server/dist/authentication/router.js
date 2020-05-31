"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRouter = void 0;
const express_1 = require("express");
const handler_1 = require("./handler");
const AuthenticationRouter = express_1.Router();
exports.AuthenticationRouter = AuthenticationRouter;
AuthenticationRouter.get('/login', handler_1.AuthenticationHandler.authenticate(), (req, res) => res.status(200).json(req.user));
AuthenticationRouter.post('/callback', handler_1.AuthenticationHandler.authenticate(), (req, res) => res.redirect('/'));
