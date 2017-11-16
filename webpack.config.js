
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
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [basePath('src')]
      },
      {
        test: /\.png$/i,
        loaders: [
          'file-loader',
          'image-webpack-loader'
        ],
        include: [basePath('src')],
      }
    ]
  }
}
