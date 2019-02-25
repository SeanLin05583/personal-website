const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
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
						options: {
							modules: true,
							localIdentName: '[name]-[local]-[hash:base64:8]',
						},
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
						options: {
							modules: true,
							localIdentName: '[name]-[local]-[hash:base64:8]',
						},
					},
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' },
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
	],
	optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};