
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const outputDirectory = 'dist';

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    port: parseInt(process.env.CLIENT_PORT, 10),
    open: process.env.OPEN_BROWSER === 'true',
    proxy: {
      '/api': `http://localhost:${process.env.API_PORT}`,
    },
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      ...process.env,
    }),
    new Dotenv({
      path: './.env',
    }),
  ],
};
