var webpack = require('webpack')

var options = {
  entry: "./index.js",
  output: {
    path: __dirname + '/static',
    publicPath: '/static/',
    filename: "app.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

module.exports = options;