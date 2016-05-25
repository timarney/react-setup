const path = require('path')
const webpack = require('webpack')

const Dedupe = new webpack.optimize.DedupePlugin()
const UglifyJs = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    screw_ie8: true
  }
})

const CommonsChunk = new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' })
const DefineENV = new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') })

const config = {
  entry: {
    app: path.resolve(__dirname, './src/main.js'),
    vendors: ['react', 'react-dom']
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
    CommonsChunk,
    DefineENV
  ]
}

console.log('== using ' + process.env.NODE_ENV + ' env ==')

if (process.env.NODE_ENV === 'production') {
  config.output.path = path.join(__dirname, 'dist/')
  /* only add these for production */
  config.plugins.push(Dedupe, UglifyJs)
}

module.exports = config
