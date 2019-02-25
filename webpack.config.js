var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			assets: path.resolve(__dirname, 'src/assets/'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
					},
					{ loader: 'postcss-loader' },
				]
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
					},
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' },
				]
			},
			{
				test: /\.(svg|png|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							modules: true,
							localIdentName: '[name]-[local]-[hash:base64:8]',
						},
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new CopyWebpackPlugin([
			{
				from: './src/assets/img',
				to: './assets/img'
			}
		]),
		new CleanWebpackPlugin(['dist']),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
};