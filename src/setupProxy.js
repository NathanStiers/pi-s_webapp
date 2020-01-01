const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'https://api-pis-dev.herokuapp.com/',
    changeOrigin: true,
    pathRewrite: {
        '^/api/': '/' // remove base path
      },
  }));
};
