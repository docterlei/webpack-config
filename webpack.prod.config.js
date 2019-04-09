const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',

  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: true, localIdentName: '[name]__[local]--[hash:base64:5]' } }],
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.', '.js', '.jsx'],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'build/index.html'),
      template: path.resolve(__dirname, 'index.html'),
      hash: true,
    }),
  ],
};
