import { optimize, DefinePlugin } from 'webpack'
import { join } from 'path'

export default {
  target: 'web',
  cache: false,
  context: __dirname,
  devtool: false,
  entry: ['./src/react-inline-css', './src/example'],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'react-inline-css.bundle.js'
  },
  plugins: [
    new DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }),
    new optimize.DedupePlugin(),
    new optimize.OccurenceOrderPlugin(),
    new optimize.UglifyJsPlugin({ output: { comments: false } })
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
