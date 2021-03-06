const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')//使用commonjs模块化方案引入path
const { CleanWebpackPlugin } = require('clean-webpack-plugin') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// console.log(__dirname)//__dirname项目的根路径:/Users/youngzx/Desktop/Code/lesson_fullstack/workflow/webpack/webpack-demo

// console.log(path.join(__dirname,'dist'))//__dirname项目的根路径

// module.exports = {
//     mode: 'production',
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.join(__dirname,'dist')
//     }
// }

// module.exports = {
//         mode: 'development',
//         entry: './src/main.css',
//         output: {
//             filename: 'bundle.css',
//             path: path.join(__dirname,'dist')
//         },
//         module:{
//             rules:[
//                 {
//                     test: /\.css$/,
//                     use:'css-loader'
//                 }
//             ]
//         }
//     }

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename:'[name].[contenthash:8].js',
        path: path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer:{
        compress: true,
        port: 1314
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        })
    ]
}