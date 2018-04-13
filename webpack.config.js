const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ],
  devtool: 'source-map', //generate source map
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    contentBase: './public' 
  }
};