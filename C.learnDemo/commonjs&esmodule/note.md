- cjs

  - commonjs 是 Node 中的模块规范，通过 require 及 exports 进行导入导出 (进一步延伸的话，module.exports 属于 commonjs2)
  - 同时，webpack 也对 cjs 模块得以解析，因此 cjs 模块可以运行在 node 环境及 webpack 环境下的，但不能在浏览器中直接使用。但如果你写前端项目在 webpack 中，也可以理解为它在浏览器和 Node 都支持。

- esm
  - esm 为静态导入，正因如此，可在编译期进行 Tree Shaking，减少 js 体积。如果需要动态导入，tc39 为动态加载模块定义了 API: import(module) 。可将以下代码粘贴到控制台执行
