'use strict';

const path = require('path');
const webpack = require('webpack');
const jsVendors = require('./config/webpack.js-vendors');

module.exports = {

  entry: {
    app: './dev/index.ts',
    vendor: jsVendors // toDO: try to use imports instead of array of paths
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/',
    filename: '[name].bundle.min.js',
    sourceMapFilename: '[name].bundle.min.js.map'
  },

  module: {
    // preLoaders: [
    //   { test: /\.ts$/, loader: 'tslint' }
    // ],
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
      { test: /\.(pug|jade)$/, loader: 'pug-html-loader', exclude: /node_modules/ },
      // { test: /\.html$/, loader: 'raw' },
      // { test: /\.css$/, loader: 'style!css?sourceMap' },
      // { test: /\.svg/, loader: 'url' },
      // { test: /\.eot/, loader: 'url' },
      // { test: /\.woff/, loader: 'url' },
      // { test: /\.woff2/, loader: 'url' },
      // { test: /\.ttf/, loader: 'url' }
    ],

    // plugins: [
    //   new webpack.ProvidePlugin({
    //     jQuery: 'jquery',
    //     $: 'jquery',
    //     jquery: 'jquery',
    //   })
    // ]
  },

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts"]
  },

  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './client/public'
  }

};
