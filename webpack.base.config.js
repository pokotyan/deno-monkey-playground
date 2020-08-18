/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader?modules', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.mjs', '.wasm'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};
