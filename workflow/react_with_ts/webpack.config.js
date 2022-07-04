const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve:{
      extensions:[".js",".ts",".tsx"]
    },
    entry:{
      app: ["./main.tsx"]
    },
    output:{
      filename:"[name].[chunkhash].js"
    },
    module:{
      rules:[
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html"
      })
    ]
}