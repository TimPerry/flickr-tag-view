var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
	'./src/scripts/index.jsx'
    ],
    module: {
	loaders: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel'
	    },
	    {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	    }
	]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
	new HtmlWebpackPlugin({
	    inject: false,
	    template: require('html-webpack-template'),
	    title: 'Flickr tag view',
	    appMountId: 'app'
	})
    ],
    resolve: {
	extensions: ['', '.js', '.jsx']
    },
    output: {
	path: __dirname + '/dist',
	publicPath: '/',
	filename: 'app.js'
    },
    devServer: {
	contentBase: './dist'
    }
};
