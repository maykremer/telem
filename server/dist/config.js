"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    serverPort: 3000,
    auth: {
        shragaURL: process.env.SHRAGA_URL || "http://13.79.7.3",
        callbackURL: process.env.CALLBACK_URL || "/auth/callback"
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map