- npm install --save-dev @babel/core @babel/cli @babel/preset-env
- 在项目的根目录下创建一个命名为 babel.config.json 的配置文件（需要 v7.8.0 或更高版本），并将以下内容复制到此文件中

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

- 运行npx babel src --out-dir lib：发现lib下多了一个index.js但是没有转化为es5的写法： @babel/core 只复制把代码转换为 AST，然后 babel 又把 AST 转为代码，中间并没有做任何处理。

- Babel 的核心功能包含在 @babel/core 模块中。

- CLI 命令行工具
