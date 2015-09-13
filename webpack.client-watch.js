var webpack = require("webpack");
var config  = require("./webpack.client.js");

config.cache   = true;
config.debug   = true;
config.devtool = "eval";

config.entry.WDS = "webpack-dev-server/client?http://localhost:8080";
config.entry.hot = "webpack/hot/only-dev-server";

config.module.postLoaders = [
	{test: /\.js$/, loaders: ["react-hot"], exclude: /node_modules/}
];

config.output.publicPath             = "http://localhost:8080/dist/";
config.output.hotUpdateMainFilename  = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.HotModuleReplacementPlugin()
];

config.devServer = {
	publicPath:  "http://localhost:8080/dist/",
	contentBase: "./static",
	hot:         true,
	inline:      true,
	quiet:       true,
	noInfo:      true,
	headers:     {"Access-Control-Allow-Origin": "*"},
	stats:       {colors: true}
};

module.exports = config;
