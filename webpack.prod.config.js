/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
});
