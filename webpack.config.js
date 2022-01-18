const path = require("path");
const webpack = require("webpack");
const Html = require("html-webpack-plugin");
const Mini = require("mini-css-extract-plugin");
module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/images/[name][contenthash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.css$/,
        use: [Mini.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [Mini.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif|ico)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   "process.env": { NODE_ENV: JSON.stringify("production") },
    // }),
    new Html({ template: "./public/index.html" }),
    new Mini({ filename: "[name].[hash].css" }),
  ],
};
