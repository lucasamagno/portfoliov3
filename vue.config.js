const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfoliov3/' // Replace 'repository-name' with your GitHub repo name
    : '/'
});
