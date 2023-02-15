const TerserPlugin = require("terser-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const { composePlugins, withNx } = require("@nrwl/webpack");
const { withReact } = require("@nrwl/react");

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config, context) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  const isProd = context.configuration === "production";

  if (!isProd) {
    config.stats = "errors-warnings";
  }

  config.resolve.fallback = {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    path: require.resolve("path-browserify"),
    https: require.resolve("https-browserify"),
    http: require.resolve("stream-http"),
    os: require.resolve("os-browserify/browser"),
    assert: require.resolve("assert/"),
  };
  config.plugins.push(
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    })
  );

  if (isProd) {
    config.optimization.minimizer.push(new TerserPlugin());
  }

  return config;
});
