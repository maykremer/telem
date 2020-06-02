"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenticationMiddleware {
    static requireAuth(req, res, next) {
        if (req.user) {
            return next();
        }
        return res.redirect('/auth/login');
    }
}
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=middleware.js.map