const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/main.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: './public',
    port: '9000'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true}),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'estilo.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader, // loader que exporta em css externo
           // 'style-loader',  // loader que embeda no js
           'css-loader',
           'sass-loader'
          ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  }
}
