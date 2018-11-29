import express from "express"
import path from "path"

// EXPRESS
const server = express()

// IMPORTS
const isProd = process.env.NODE_ENV === "production"

if (!isProd) {
  const webpack = require("webpack")
  const config = require("../../config/webpack.dev.js")

  // CONFIGS
  const compiler = webpack(config)
  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  )
  const webpackHotMiddleware = require("webpack-hot-middleware")(compiler)

  // MIDDLEWARE
  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddleware)
}

const staticMiddleware = express.static("dist")
server.use(staticMiddleware)

// LISTENNER
const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Server is listenning on http://localhost:${PORT}`)
})
