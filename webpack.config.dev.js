const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const DEV_PORT = '8090';

module.exports = () => ({
  context: __dirname,
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    liveReload: false,
    overlay: true,
    port: DEV_PORT
  },
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
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
    symlinks: false,
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'Components': path.resolve(__dirname, 'src', 'components'),
      'Utils': path.resolve(__dirname, 'src', 'utils')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ DEBUG: true }),
    new webpack.ProvidePlugin({
      axios: 'axios',
      moment: 'moment',
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
      inject: 'body'
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
