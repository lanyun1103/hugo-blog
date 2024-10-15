module.exports = {
  apps : [{
    name: 'hugo-server',
    script: 'hugo',
    args: 'server --bind 0.0.0.0 --baseURL https://blog.jotaro.cn --port 1313 --appendPort=false',
    interpreter: 'none',
    cwd: '/root/hugo',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
