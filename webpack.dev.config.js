/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 9000,
    contentBase: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
});
