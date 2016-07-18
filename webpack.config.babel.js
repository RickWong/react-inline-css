import webpack from 'webpack'
import { join } from 'path'

export default {
  target: 'web',
  cache: false,
  context: __dirname,
  devtool: false,
  entry: { example: './src/example' },
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json-loader'] },
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  resolve: { extensions: ['', '.json', '.jsx', '.js'] }
}
