var path = require('path')
var webpack = require('webpack')

var config = {
  entry: {
    app: path.resolve(__dirname, './src/main.js'),
    vendors: ['react']
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
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
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
}

module.exports = config
