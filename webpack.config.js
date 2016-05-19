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
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' })
  ]
}

console.log('== using '+process.env.NODE_ENV+' env ==')


if (process.env.NODE_ENV === 'production') {
  config.output.path = path.join(__dirname, 'dist/')
}

module.exports = config
