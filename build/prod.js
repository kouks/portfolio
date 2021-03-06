const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../webpack.config')
const Uglify = require('uglifyjs-webpack-plugin')
const Compression = require('compression-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

webpack(merge(config, {
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new Uglify(),
    new Compression({
      algorithm: 'gzip'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
}), () => {})
