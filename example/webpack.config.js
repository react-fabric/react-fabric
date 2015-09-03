module.exports = {
  context: __dirname,
  entry: './app.jsx',
  output: {
    path: __dirname,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [
        'babel?stage=0&optional=runtime'
      ]}
    ]
  },
  resolve: {
    modulesDirectories: [
      '.',
      '../node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  }
}
