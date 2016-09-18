var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			ApplicationStyles: 'app/styles/app.scss',
			Main: 'app/components/Layout/Main.jsx',
			Nav: 'app/components/Layout/Nav.jsx',
			Timer: 'app/components/Timer.jsx',
			CountDown: 'app/components/CountDown.jsx'
		},
		extensions: ['','.js', '.jsx']
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_module|bower_components)/
		}]
	},
	devtool: 'inline-source-map'
};