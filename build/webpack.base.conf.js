const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const baseConfig = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader'
              }),
              less: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader'],
                fallback: 'vue-style-loader'
              })
            }
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.eot/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              limit: 10000,
              mimetype: 'application/vnd.ms-fontobject'
            }
          }
        ]
      },
      {
        test: /\.woff(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.ttf(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              limit: 10000,
              mimetype: 'application/font-ttf'
            }
          }
        ]
      }
    ]
  },
}

module.exports = baseConfig;
