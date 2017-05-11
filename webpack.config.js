var webpack = require('webpack')
var path = require('path')

var BUILDDIR = path.resolve(__dirname, 'public/')
var APPDIR = path.resolve(__dirname, 'src/')

var config = {
  entry: APPDIR + '/index.jsx',
  output: {
    path: BUILDDIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APPDIR,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

module.exports = config
