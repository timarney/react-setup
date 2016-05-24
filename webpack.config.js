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
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      comments: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' })
  ]
}

console.log('== using '+process.env.NODE_ENV+' env ==')


if (process.env.NODE_ENV === 'production') {
  config.output.path = path.join(__dirname, 'dist/')
}

module.exports = config
