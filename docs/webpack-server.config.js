/* eslint-disable */

var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  //Entry point to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.jsx')
  ],
  //Webpack config options on how to obtain modules
  resolve: {
    //When requiring, you don't need to add these extensions
    extensions: ["", ".js", ".jsx"],
    alias: {
      'react-fabric': path.resolve(__dirname, '../src'),
    },
    //Modules will be searched for in these directories
    modulesDirectories: [
      "node_modules",
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules')
    ],
  },
  //Configuration for dev server
  devServer: {
    contentBase: '',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000
  },
  devtool: 'eval',
  //Output file config
  output: {
    filename: 'app.js'  //Name of output file
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //Used to include index.html in build folder
    new HtmlWebpackPlugin({
        inject: false,
        template: path.join(__dirname, '/src/index.html')
    }),
    //Allows error warninggs but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    //Allow loading of non-es5 js files.
    loaders: [
      {
        test: /\.jsx?$/, //All .js and .jsx files
        loaders: ['react-hot','babel-loader?stage=0'], //react-hot is like browser sync and babel loads jsx and es6-7
        include: [__dirname, path.resolve(__dirname, '../src')], //include these files
        exclude: [nodeModulesPath]  //exclude node_modules so that they are not all compiled
      },
      {
        test: /\.css$/,
        loader: 'style-loader!raw-loader',
        include: [path.resolve(nodeModulesPath, 'Fabric')]
      }
    ]
  },
};

module.exports = config;
