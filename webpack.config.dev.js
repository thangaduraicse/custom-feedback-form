const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const DEV_PORT = '8090';

module.exports = () => ({
  context: __dirname,
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    clientLogLevel: 'error',
    compress: true,
    contentBase: __dirname,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    port: DEV_PORT,
    progress: true,
    stats: 'minimal',
    watchOptions: {
      aggregateTimeout: 1000,
      ignored: /node_modules/,
      poll: true
    }
  },
  devtool: 'eval-cheap-module-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
    'webpack/hot/only-dev-server',
    '@babel/polyfill',
    'classlist-polyfill',
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'src', 'scss', 'main.scss')
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { url: false } }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { url: false } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    symlinks: false
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      axios: 'axios',
      moment: 'moment',
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html')
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    new CopyPlugin({
      patterns: [
        {
          force: true,
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'public', 'assets')
        }
      ]
    })
  ]
});
