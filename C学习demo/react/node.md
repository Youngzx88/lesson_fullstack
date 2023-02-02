## 从0起一个react项目(无脚手架)
1. 初始化一个web项目：npm init
2. 安装webpack：npm i webpack@4 webpack-cli@3 webpack-dev-server@3
3. 安装react：npm i react react-dom -save
4. 安装bable(转义es6，css)：npm i @babel/core@7.12.3 babel-loader@8.1.0 @babel/preset-react@7.12.1
5. 安装bable css loader：npm i css-loader@5.0.0 style-loader@2.0.0
6. 安装插件打包html模版：npm i html-webpack-plugin@4.5.0
7. 创建webpack.config.js文件，进行webpack的打包，填写配置
```js
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"main.js"
    },
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader:'babel-loader',
                options:{
                    presets: [
                        "@babel/react"
                    ]
                }
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']  // 从右到左执行，所以注意顺序
            }
        ]
    },
    plugins:[new htmlWebpackPlugin({
        template:path.join(__dirname,'./index.html'),
        filename: 'index.html'
    })
    ],
}

```

## State 的更新可能是异步的
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。