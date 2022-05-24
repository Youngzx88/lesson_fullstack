Readme.md
# babel js的编译器
- 变成node项目npm init -y
- npm i @babel/cli @babel/core @babel/preset-env --save-dev    //babel命令行工具；babel转义的核心；babel默认转义es6-》es5 ；保存为开发依赖(上线不需要转义)
- npm i react
- npm i stylus --save-dev
- 新建 .babelrc
```json
{
    "presets":["@babel/preset-env"]
}
```
- .\node_modules\.bin\babel 1.js -o es5.js 完成转换并输出