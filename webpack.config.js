const path = require('path')

const BUILDDIR = path.join(__dirname, 'public/')
const APPDIR = path.join(__dirname, 'src/')

const config = {
  entry: {
    app: APPDIR + 'index'
  },
  output: {
    path: BUILDDIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: '#source-map'
}

module.exports = config
