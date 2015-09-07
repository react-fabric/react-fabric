module.exports = {
  context: __dirname,
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [
        'eslint-loader'
      ]}
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [
        'babel?stage=0&optional=runtime'
      ]}
    ]
  },
  resolve: {
    modulesDirectories: [
      '.',
      './node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  }
}
