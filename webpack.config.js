var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      // {
      //   test: /\.js?/,
      //   include: SRC_DIR,
      //   loader: "babel-loader",
      //   query: {
      //     presets: ["angular", "es2015", "stage-2"]
      //   }
      // },
      {
        test: /\.html$/,
        include: /src/,
        loader: 'html-loader'
      }//,
      // {
      //   test: /\.less$/,
      //   loader: "style-loader!css-loader!less-loader"
      // }
    ]
  }
};

module.exports = config;