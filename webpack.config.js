var path = require('path');
const moment = require('moment');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const imgPath = process.env.MODE === 'publish' ? '/seanlin-profile' : '/';

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: `bundle.js?${moment().format('YYYY-MM-DD HH:mm')}`,
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
				use: { loader: "babel-loader" },
			},
			{
				test: /\.html$/,
				use: [
					{ loader: "html-loader" },
				],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
				],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.(svg|png|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'asset/img/[name].[hash:7].[ext]',
							publicPath: imgPath,
						},
					},
				],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
		new CleanWebpackPlugin(['dist']),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
};