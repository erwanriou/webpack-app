import express from "express";
import path from "path";

// EXPRESS
const server = express();

// IMPORTS
const webpack = require("webpack");
const config = require("../../config/webpack.dev.js");
const staticMiddleware = express.static("dist");

// CONFIGS
const compiler = webpack(config);
const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

// MIDDLEWARE
server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);

// LISTENNER
server.listen(8080, () => {
  console.log("Server is listenning");
});
