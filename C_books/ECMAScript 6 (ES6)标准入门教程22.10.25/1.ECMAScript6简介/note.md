1. 安装babel
    ```bash
    $ npm install --save-dev @babel/core
    ```
2. 创建配置文件`.babelrc`
    ```babelrc
    //.babelrc
    <!-- 该文件用来设置转码规则和插件，基本格式如下。 -->
    {
      "presets": [],
      "plugins": []
    }
    ```
3. presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
    ```bash
    # 最新转码规则
    $ npm install --save-dev @babel/preset-env
    # react 转码规则
    $ npm install --save-dev @babel/preset-react
    ```
4. 然后，将这些规则加入.babelrc。
    ```.babelrc
    {
      "presets": [
        "@babel/env",
        "@babel/preset-react"
      ],
      "plugins": []
    }
    ```
5. Babel 提供命令行工具@babel/cli，用于命令行转码。
    ```bash
    $ npm install --save-dev @babel/cli
    ```
6. 基本用法
    ```bash
    # 转码结果输出到标准输出
    $ npx babel example.js
    # 转码结果写入一个文件
    # --out-file 或 -o 参数指定输出文件
    $ npx babel example.js --out-file compiled.js
    # 或者
    $ npx babel example.js -o compiled.js
    # 整个目录转码
    # --out-dir 或 -d 参数指定输出目录
    $ npx babel src --out-dir lib
    # 或者
    $ npx babel src -d lib
    # -s 参数生成source map文件
    $ npx babel src -d lib -s
    ```
7. polyfill
- Babel 默认只转换新的 `JavaScript` 句法（syntax），而不转换新的 `API`，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

- 举例来说，ES6 在Array对象上新增了Array.from方法。Babel 就不会转码这个方法。如果想让这个方法运行，可以使用core-js和regenerator-runtime(后者提供generator函数的转码)，为当前环境提供一个垫片。
```shell
$ npm install --save-dev core-js regenerator-runtime
```