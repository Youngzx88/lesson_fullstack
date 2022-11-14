1，初始化 npm 项目，生成 package.json。
2，添加 public/index.html。
3, 安装 Babel，创建.babelrc 进行配置。
4，安装 react、react-dom、热更新 react-hot-loader。
5，安装 webpack，创建 webpack.config.js 进行配置。
6，添加 src/index.js、src/App.js、src/App.css。
7，配置 package.json，修改启动命令。
8，启动项目

1. npm init -y
2. 创建 public/index.htmlm
3. 创建 bablerc

```js
{   "presets": ["@babel/env", "@babel/preset-react"] }
```

4. 以及 npm install -D @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
5. npm i react react-dom -S npm i react-hot-loader -D 路由和热更新
6. npm i webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader --save-dev 安装 webpack 依赖
7. 编写 webpack.config.js
8. 添加 src/index.js、src/App.js、src/App.css。
