var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './app.js',
  output: { path: __dirname, filename: 'bundle.js' },
  node: {
    console: true,
    fs: "empty"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      webworkify: 'webworkify-webpack'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/mapbox-gl/js/render/painter/use_program.js'),
        loader: 'transform/cacheable?brfs'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/mapbox-gl/js/render/shaders.js'),
        loader: 'transform/cacheable?brfs'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/webworkify/index.js'),
        loader: 'worker'
      }
    ]
  },
};
