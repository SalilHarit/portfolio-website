const { override, addBabelPreset, addBabelPlugin } = require("customize-cra");

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "fs": false,  // If your project does not require filesystem access in the browser.
      "net": false,
      "tls": false,
      "dns": false,
      "child_process": false
    }
  },
  ...override(
    addBabelPreset("@babel/preset-env"),
    addBabelPlugin("@babel/plugin-proposal-class-properties")
  )
};