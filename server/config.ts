const config = {
    serverPort: 3000,
    // auth: {
    //     callbackURL: process.env.AUTH_CALLBACK_URL,
    //     shragaURL: process.env.SHRAGA_URL,
    //     useEnrichId: true,
    //     secret: 'ApPr0vaL_5ySt3m',
    //     daysExpires: 3,
    // }
    auth: {
        shragaURL: process.env.SHRAGA_URL || "http://13.79.7.3",
        callbackURL: process.env.CALLBACK_URL || "http://localhost:3001/auth/callback"
    },

};

export default config;