var webpack = require('webpack')

var options = {
  entry: "./index.js",
  output: {
    path: __dirname + '/static',
    filename: "app.js"
  },
  devtool: "source-map",
  module: {
    preLoaders: [
      { test: /\.json$/, loader: 'json'}
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

module.exports = options;