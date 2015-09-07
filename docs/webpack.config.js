/* eslint-disable */

var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  entry: [
    path.join(__dirname, '/src/index.jsx')
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      'react-fabric': path.resolve(__dirname, '../src'),
    },
    modulesDirectories: [
      "node_modules",
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules'),
    ],
  },
  devtool: 'source-map',
  output: {
    path: buildPath,
    filename: 'index.js'
  },
  plugins: [
    //Used to include index.html in build folder
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
        inject: false,
        template: path.join(__dirname, '/src/index.html')
    }),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'css'},
    ], path.resolve(__dirname,"src"))
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, "../src")],
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?stage=0'],
        include: [__dirname, path.resolve(__dirname, '../src')],
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!raw-loader',
        include: [path.resolve(nodeModulesPath, 'Fabric')]
      }
    ]
  },
  eslint: {
    configFile: '../.eslintrc'
  }
};

module.exports = config;
