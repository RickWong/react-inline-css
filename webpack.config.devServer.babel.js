import { HotModuleReplacementPlugin } from 'webpack'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import webpackConfig from './webpack.config.babel'

export default {
  devServer: {
    historyApiFallback: true,
    hot: true,
    progress: true,
    contentBase: resolve('static'),
    port: 8080,
    outputPath: resolve('build'),
    compress: true
  },
  ...webpackConfig,
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'react-root',
      title: 'react-inline-style'
    })
  ],
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/example'
  ],
  debug: true,
  cache: true
}
