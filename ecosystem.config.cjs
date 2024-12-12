module.exports = {
  apps: [
    {
      name: 'Meetple Admin',
      port: '3020',
      exec_mode: 'fork',
      instances: '1',
      script: './.output/server/index.mjs'
    }
  ]
}
