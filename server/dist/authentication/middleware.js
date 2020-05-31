"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
class AuthenticationMiddleware {
    static requireAuth(req, res, next) {
        console.log("auth");
        if (req.user) {
            return next();
        }
        // return res.redirect('/auth/login');
    }
}
exports.AuthenticationMiddleware = AuthenticationMiddleware;
