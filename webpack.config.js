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
  devtool: '#source-map',
  devServer: {
    // contentBase: Tell the server where to serve content from. This is only necessary if you want to serve static files. The public/ is where index.html resides.
    contentBase: path.join(__dirname, 'public/'),
    port: 8000,
    compress: true
  }
}

module.exports = config
