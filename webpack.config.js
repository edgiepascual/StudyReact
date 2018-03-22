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