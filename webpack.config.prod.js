const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => ({
  context: __dirname,
  entry: {
    polyfills: ['@babel/polyfill', 'classlist-polyfill'],
    app: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "src", "scss", "main.scss")
    ]
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { url: false } }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { url: false } },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    symlinks: false,
    alias: {
      'Components': path.resolve(__dirname, 'src', 'components'),
      'Utils': path.resolve(__dirname, 'src', 'utils')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: 4,
        terserOptions: {
          compress: {
            drop_console: true,
            negate_iife: false,
            passes: 2
          },
          ie8: true,
          mangle: {
            safari10: true
          },
          output: {
            beautify: false,
            comments: false,
            safari10: true
          },
          parse: {
            html5_comments: false
          },
          safari10: true
        }
      })
    ],
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all',
      enforceSizeThreshold: 50000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      minSize: 20000,
      maxSize: 0,
      cacheGroups: {
        defaultVendors: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new webpack.ProvidePlugin({
      axios: "axios",
      moment: "moment",
      PropTypes: "prop-types",
      React: "react",
      ReactDOM: "react-dom"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "template.html"),
      inject: "body"
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    new CopyPlugin({
      patterns: [
        {
          force: true,
          from: path.resolve(__dirname, "assets"),
          to: path.resolve(__dirname, "public", "assets")
        }
      ]
    })
  ],
  stats: "errors-only"
});
