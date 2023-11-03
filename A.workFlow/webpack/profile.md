# 概念

- 所有的框架最后都要变为原始的 html，js，css
- webpack 是一个现代 JavaScript 应用程序的静态模块打包器

## Loader 模块打包方案

- 官方对 Loader 的介绍是：Webpack 可以使用 Loader 来预处理文件。这允许你打包除 JS 之外的任何静态资源。

- 在我看来，Loader 就是一种模块打包方案，怎么理解？给大家科普一个知识点：Webpack 默认是知道如何打包 js 类型文件，但对于其他类型文件，它是不知道如何处理，我们得告诉它，对这种类型文件，打包的方案是什么。接下来，我们通过例子，帮助小伙伴们理解为什么我说它是一种方案。

  - 新建 demo 文件夹,，创建一个 index.js 文件
  - npx webpack index.js,不配置任何东西 webpack 可直接打包 js 文件

  ```js
  // index.js打包前
  const myName = 'youngzx'
  console.log(myName)
  // index.js打包后
  console.log('youngzx')
  ```

  - 修改 index.js 导入图片文件，Webpack 很友好，它会告诉你，你需要一个 loader 去处理此文件类型。

  ```js
  import tuzi from './tuzi.JPG'
  const myName = 'youngzx'
  console.log(myName)
  // 报错
  //ERROR in ./tuzi.JPG 1:0
  //Module parse failed: Unexpected character '�' (1:0)
  //You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  ```

  - 官方提供了一种专门处理次类型的方案：file-loader
    - `npm install --save-dev file-loader`
  - 接着新增一个文件 `webpack.config.js`,新增对于 jpg 文件格式处理的`loader`，`name`和`output`是你自己设置的路径

  ```js
  // webpack.config.js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.jpg$/,
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
  }
  ```

  - 这么一想对于 css 的 loader 也就不陌生了

    ```js
    rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.less$/,
          use: {
            loader: 'less-loader',
          },
        },
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader',
          },
        },
    ]
    ```

## Plugins 打包更加便捷

- 通过官网可知，在我们未配置 output 属性时，它的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。
- 因为我们都用的默认配置，所以打包生成的文件夹名就叫 dist，bundle 默认名称就是 main.js
- 接下来我们手动创建一个 HTML，加载打包后的 js 文件，如何加载呢？通过 script 加载打包后的 main.js
- 假设我们的outputs输出是：filename: '[main]_[hash].bundle.js',
- 那么每次修改index.js，生成的hash都是变化的，每次去index.html里面修改引入的js文件会十分麻烦，有什么快捷的方式吗？Plugins
- `HtmlWebpackPlugin` 插件进行简化 HTML 文件的创建，这对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用！
- HtmlWebpackPlugin 会在打包结束后，自动帮我们生成一个 HTML 文件，同时把打包后的 bundle 自动引入。当我们内容修改，重新打包，生成的 HTML 也会随着每次编译导致哈希变化的 bundle 自动引入。
- 但是自动生成的html少了框架携带的root节点，HtmlWebpackPlugin 提供了一个配置参数 `template`，它允许你自定义 HTML 文件，以此文件为模版，生成一份一样的 HTML 并为你自动引入打包后的 bundle。

## 总结

- Loader 就是一种模块打包方案，换言之，它是一名具备文件类型转换的翻译员
- Plugins 用于扩展 Webpack 的功能，使得 webpack 变得极其灵活。
- Plugins 可以在 Webpack 运行到某个时刻，帮你做一些事情。学过 Vue、React 的小伙伴应该对生命周期不陌生，其实 Plugins 很像生命周期函数，在 Webpack 运行到某个生命周期去做些事情。
