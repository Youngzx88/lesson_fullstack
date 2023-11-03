// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './plugin/index.js',
  output: {
    // 这里将输出的结果代码文件自定义配置文件名
    filename: '[main]_[hash].bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './format.html'
  })],
  module: {
    rules: [
      {
        test: /\.JPG$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
};
