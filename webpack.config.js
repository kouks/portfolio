const Uglify = require('uglifyjs-webpack-plugin')
const Compression = require('compression-webpack-plugin')

function basePath (dir) {
  return require('path').join(__dirname, dir)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: basePath('dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  plugins: [
    new Uglify(),
    new Compression({
      algorithm: 'gzip'
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': basePath('src'),
      'config': basePath('config'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [basePath('src')],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [basePath('src')],
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [basePath('src')]
      }
    ]
  }
}
