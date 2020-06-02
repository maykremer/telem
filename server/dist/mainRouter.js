"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
const personRouter_1 = require("./personRouter");
const middleware_1 = require("./authentication/middleware");
const AppRouter = express_1.Router();
exports.AppRouter = AppRouter;
AppRouter.use('/', middleware_1.AuthenticationMiddleware.requireAuth, personRouter_1.default);
//# sourceMappingURL=mainRouter.js.map