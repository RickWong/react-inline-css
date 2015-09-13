var webpack = require("webpack");
var path = require("path");

module.exports = {
	target:  "web",
	cache:   false,
	context: __dirname,
	devtool: false,
	entry:   {example:"./src/example"},
	output:  {
		path:          path.join(__dirname, "static/dist"),
		filename:      "[name].js",
		chunkFilename: "[name].[id].js",
		publicPath:    "dist/"
	},
	plugins: [
		new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module:  {
		loaders: [
			{test: /\.json$/, loaders: ["json-loader"]},
			{test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/},
			{test: /\.scss$/, loaders: ["raw-loader", "sass-loader"], exclude: /node_modules/}
		]
	},
	resolve: {
		extensions: ["", ".json", ".jsx", ".js"]
	}
};
