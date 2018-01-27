const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/js'
  },
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: 'js/bundle.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve(__dirname, 'src/js')]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: path.resolve(__dirname, 'dist/js')
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
      },
      output: {
          comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    })
  ]
}
