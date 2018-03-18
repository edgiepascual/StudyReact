/*var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var main_dir = __dirname;

module.exports = {
	context: main_dir + "src",
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./src/index.js",
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'tranform-decorators-legacy']

				}
			}
		]
	},
	output: {
		path: main_dir + "/src",
		filename: "index.js",
		publicPath: `/src`
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJSPlugin({ mangle : false, sourcemap: false })
	]
};*/

/*const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};*/

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'main.js' //file name created when loading in dev mode
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { 
          test: /\.jsx?$/,         // to be able to implement jsx in your js file
          exclude: /node_modules/, 
          loader: "babel-loader", 
          query:
            {
              presets:['react']
            }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ]
};