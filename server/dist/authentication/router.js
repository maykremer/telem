"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRouter = void 0;
const express_1 = require("express");
const passport = require("passport");
const AuthenticationRouter = express_1.Router();
exports.AuthenticationRouter = AuthenticationRouter;
AuthenticationRouter.get("/login", passport.authenticate("shraga", {
    failureRedirect: "/failed",
    failureFlash: true,
}));
AuthenticationRouter.post("/callback", passport.authenticate("shraga", {
    failureRedirect: "/failed",
    failureFlash: true,
}), (req, res) => res.redirect("/"));
//# sourceMappingURL=router.js.map