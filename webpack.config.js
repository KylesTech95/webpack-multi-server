const { ifError } = require('assert');
const { error } = require('console');
const HtmlWebpackPlugin = require('html-webpack-plugin')
require("dotenv").config();
const path = require("path");
module.exports = {
  mode: process.env.PROD || "development",
  //   entry: {
  //     main: path.resolve(__dirname, "src/server.js"),
  //   },
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [{ test: /\.js/i, exclude: /node_modules/i }],
  },
  devtool: "source-map",

  // dev server
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 6654,
    open: true,
    hot: true,
    allowedHosts: [
      ".localhost:6654", // using a . will mimic a wildcard (www.localhost:6654, http://www.localhost:6654)
      ".localhost:6655",
    ],
    proxy: [
      {
        error:function(){
            console.log('error!')
        },
        context: ["/api", "/cfg"], // fixed context
        target: "http://localhost:6655", // webpack is pointing to known express server 'src/index.js'
      },
    ],
  },

  //loaders

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "template/template.html",
    }),
  ],
};
