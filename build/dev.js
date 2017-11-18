const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../webpack.config')
const Server = require('webpack-dev-server')

config.entry.unshift('webpack-dev-server/client/index.js?http://localhost:8080', 'webpack/hot/dev-server')

const compiler = webpack(merge(config, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
}))

const server = new Server(compiler, {
  publicPath: '/dist/',
  filename: 'build.js',
  hot: true,
  stats: { colors: true, cache: true },
})

server.listen(8080)
