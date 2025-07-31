const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        zlib: require.resolve('browserify-zlib'),
        process: require.resolve('process/browser'),
        querystring: require.resolve('querystring-es3'),
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        fs: false,  // If your project does not require filesystem access in the browser
      };
      webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ]);
      return webpackConfig;
    },
  },
};