// 工程化配置文件
// html 模板指定
// 为什么要用commonjs方式？
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const path = require('path');
const basePath = __dirname;

module.exports = {
    // 指定上下文环境
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "~": path.resolve(__dirname, 'src/assets'),
        },
    },
    entry: {
        app: ["./main.tsx"]
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    devServer: {
        // colors: true,
        // historyApiFallback: true,  // 路由后退
        // inline: true,
        hot: true,
        open: true,
        port: 5266
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // 多个 loader，用use
                use: [
                    {
                        // 行内样式
                        loader: "style-loader"
                    },
                    {
                        // 引入文件
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        })
    ]
}
