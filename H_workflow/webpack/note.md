1. 使用 node api 学习 webpack

- 在我们使用 webpack 的大部分项目中，都需要使用 webpack.config.js 来配置 webpack。我们学习 webpack 的过程也就是学习 webpack 配置文件的过程，因此人称 webpack 配置工程师。但在学习过程中，不建议使用 webpack.config.js 配置文件的方式来学习 webpack。其中一个原因就是：webpack cli 实在是太难调试了！
- npx webpack,把原来传给 webpack.config.js 的配置文件传给 webpack

```js
const webpack = require('webpack')

const compiler = webpack({
  // webpack 的诸多配置置于此处
  entry: './index.js',
})

compiler.run((err, stat) => {
  // 在 stat 中可获取关于构建的时间及资源等信息
})
//====================================
//测试不同模式对打包时间的影响
webpack([
  {
    entry: './index.js',
    mode: 'production',
    output: {
      filename: 'main.production.js',
    },
  },
  {
    entry: './index.js',
    mode: 'development',
    output: {
      filename: 'main.development.js',
    },
  },
  {
    entry: './index.js',
    output: {
      filename: 'main.unknown.js',
    },
  },
]).run((err, stat) => {})
```

- 在 webpack 编译结束后，可拿到 `Stat` 对象，其中包含诸多编译时期的信息。比如，可通过该对象获取到打包后所有资源体积以及编译时间`stat.toJson()`。
- 如何得知打包的时间

```js
console.log(stat.endTime - stat.startTime)
```
