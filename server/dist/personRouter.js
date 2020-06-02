"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personController_1 = require("./personController");
const express_1 = require("express");
const PersonRouter = express_1.Router();
PersonRouter.post("/", personController_1.PersonController.create);
exports.default = PersonRouter;
//# sourceMappingURL=personRouter.js.map