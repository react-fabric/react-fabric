 /* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var yargs = require('yargs');

var options = yargs
  .alias('p', 'optimize-minimize')
  .argv;

module.exports = {
  entry: { 'react-fabric': './src/index.js' },
  devtool: options.optimizeMinimize ? 'source-map' : undefined,
  output: {
    path: __dirname + '/dist',
    filename:  options.optimizeMinimize ? '[name].min.js' : '[name].js',
    library: 'ReactFabric',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.(scss|css)$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[local]!postcss!sass'
    }]
  },
  resolve: {
    root: path.resolve('./src'),
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.json', '.scss']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
      }
    }),
    options.optimizeMinimize && new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ].filter(Boolean),
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
};
