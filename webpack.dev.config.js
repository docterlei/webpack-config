// const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/app.js',

  output: {
    filename: 'main.js',
    path: __dirname,
  },

  devServer: {
    contentBase: __dirname,
    port: 8085,
    hot: true,
    inline: true,
    open: true,
    stats: 'errors-only', // 只打印错误
    overlay: true, // 编译出错误的时候在浏览器中全屏显示报错日志
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', { loader: 'css-loader', options: { modules: true, localIdentName: '[name]__[local]--[hash:base64:5]' } }],
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: ['style-loader', 'css-loader'],
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
    new webpack.HotModuleReplacementPlugin(),
  ],
};
