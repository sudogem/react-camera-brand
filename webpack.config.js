const path = require('path')

const BUILDDIR = path.join(__dirname, 'public/')
const APPDIR = path.join(__dirname, 'src/')

const config = {
  entry: {
    app: APPDIR + 'index.jsx'
  },
  output: {
    path: BUILDDIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: '#source-map'
}

module.exports = config
