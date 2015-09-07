/* eslint-disable */

var webpack = require('webpack');

var config = require('./webpack.config')

config.entry.unshift('webpack/hot/only-dev-server')
config.entry.unshift('webpack/hot/dev-server')
config.devServer = {
  contentBase: '',
  devtool: 'eval',
  hot: true,
  inline: true,
  port: 3000
};
config.devtool = 'eval';
config.module.loaders[0].loaders.unshift('react-hot');
config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

module.exports = config;
