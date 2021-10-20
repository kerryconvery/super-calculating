const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Process and embed css into the page
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|cur)$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
        chunks: 'all',
        name: 'vendor'
    }
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      filename: './index.html'
    })
  ],
  mode: 'production'
};
