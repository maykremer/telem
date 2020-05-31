const config = {
    serverPort: 3000,
    auth: {
        callbackURL: process.env.AUTH_CALLBACK_URL,
        shragaURL: process.env.SHRAGA_URL,
        useEnrichId: true,
        secret: 'ApPr0vaL_5ySt3m',
        daysExpires: 3,
    }
};

export default config;