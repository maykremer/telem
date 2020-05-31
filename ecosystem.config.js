module.exports = {
  apps : [{
    mame: "server",
    script: './server/dist/index.js',
    watch: true,
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production",
    },
    PM2_SERVE_PATH: './server',
    PM2_SERVE_PORT: 3000
  }, 
  // {
  //   mame: "client",
  //   watch: true,
  //   script: '',
  //   env: {
  //     NODE_ENV: "development"
  //   },
  //   env_production: {
  //     NODE_ENV: "production",
  //   },
  //   PM2_SERVE_PORT: 4200
  // }, 
  //  {
  //   mame: "client",
  //   script: './serveClient.sh',
  //   // PM2_SERVE_PATH: './client',
  //   // PM2_SERVE_PORT: 4200,
  //   watch: true
  // },
  
  // // {
  // //   mame: "angular",
  // //   script: 'ng serve',
  // //   watch: true
  // // }
],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
