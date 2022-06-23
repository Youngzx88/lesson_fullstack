- npm init @vitejs/app
    - react脚手架
    - 基于vitejs工程化工具
    - npm命令node默认命令

- webpack
    - 另一个vite
    1. template
        - src目录是开发目录
        - main.js单点入口文件
        - import项目组织起来
    2. package.json
    3. npm run dev:3000端口上提供http服务

- webpack工程化流程
    1. npm init -y:`初始化`为node项目，工程化是node的产物
    2. src/开发目录 main.js / index.js 入口文件  
    3. `npm i webpack webpack-cli -D`: -D开发依赖
    4. 把项目运行起来 `npx webpack`
        - 命令行调用package里的npm包
        - src/index.js -> dist/index.js 打包的过程
        - npx后期推出的新功能
        - 默认production `npx webpack --mode=development`来设置当前模式
        ```js
        "scripts": {
            "dev": "webpack --mode=development",
            "build": "webpack --mode=production"
        }
        ```
        - `node ./dist/main.js`：运行不管是build环境还是dev环境结果一样
    5. webpack运行后有什么效果？
        - 打包工具 pack bundler，src -> dist
            - import 'a.jpg'
            - import 'index.css'
        - 应用场景  
            - development开发,调试便捷为主
            - production上线，代码，体积，性能
    6. 配置webpack,webpack默认会去找根目录下的webpack.config.js去运行
    ```js
    const path = require('path')//使用commonjs模块化方案引入path

    // console.log(__dirname)//__dirname项目的根路径:/Users/youngzx/Desktop/Code/lesson_fullstack/workflow/webpack/webpack-demo

    // console.log(path.join(__dirname,'dist'))//__dirname项目的根路径

    module.exports = {
        mode: 'production',//开发模式，也可以为development
        entry: './src/index.js',//入口文件
        output: {//出口文件
            filename: 'bundle.js',
            path: path.join(__dirname,'dist')
        }
    }
    ```

    7. 何为打包的概念？
        - 从入口进入，根据依赖关系，打包成一个bundle.js文件
    
    8. webpack默认只处理js类型的文件，甚至如果你要从es6转成es5也要用loader
        - css文件，需要手动添加loader(webpack可以打包一切静态资源，选配)
        - loader，加载特性类型文件处理的工具 npm i css-loader -D
        - 配置怎么用loader(对于css文件用css-loader去处理)
        ```js
            module:{
                rules:[
                    {
                        test: /\.css$/,
                        use:'css-loader'
                    }
                ]
            }
        ```

    9. plugins插件机制：指定首页
        - webpack有插件机制
        - npm i html-webpack-plugin -D 把index.html搬到dist目录下
        - 把打包结果bundle.js文件自动在html里引入