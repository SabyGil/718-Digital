const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

module.exports = {
	entry: ["@babel/polyfill", "./src/index.js"],
	output: {
		publicPath: '/'
	},
	externals: {
		$: 'window.jQuery',
		jQuery: 'window.jQuery',
		fullpage: 'window.fullpage'
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [{
					// loader: "html-loader",
					loader: 'html-loader?attrs[]=video:src',
					options: {
						minimize: true,
						collapseWhitespace: true,
					}
				}]
			},
			{
		    test: /\.(png|jpg|gif|svg)$/,
		    exclude: [
		      path.resolve(__dirname, './node_modules'),
		    ],
		    use: {
		      loader: 'file-loader',
		      options: {
		        name: '[path][name]-[hash].[ext]',
		        // outputPath: '../',
		        // publicPath: '/dist',
		      },
		    },
		  },
			// {
			// 	test: /\.(mov|mp4)$/,
			// 	use: [{
			// 		loader: 'url-loader',
			// 		options: {
			// 			name: '[name].[ext]'
			// 		}
			// 	}]
			// },
			// {
			// 	test: /\.(png|jpg|gif)$/,
			// 	use: [{
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[path][name].[ext]',
			// 			publicPath: '..' // use relative urls
			// 		}
			// 	}]
			// },
			{
				test: /\.s?[ac]ss$/,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== 'production' ?
					'style-loader' :
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash:8].css"
		}),
		new CleanWebpackPlugin(['dist']),
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery',
		// 	'window.jQuery': 'jquery'
		// }),
	]
};
