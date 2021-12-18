const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  devServer: {
    static: ["dist"],
    // enable gzip compression
    compress: true,
  },
};
