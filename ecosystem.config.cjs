module.exports = {
  apps: [
    {
      name: 'Meetple Admin',
      script: './start.mjs',
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
