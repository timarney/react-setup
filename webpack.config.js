var path = require('path')
var webpack = require('webpack')

var config = {
  entry: {
    app: path.resolve(__dirname, './src/main.js'),
    vendors: ['react','react-dom']
  },
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.output.path = path.join(__dirname, 'dist/')

  /*
  Note: by default, React will be in development mode
        see https://facebook.github.io/react/downloads.html
  */

  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }))
}

module.exports = config
