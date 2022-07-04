Readme.md
# babel js的编译器
### ES6->ES5
- 变成node项目npm init -y
- npm i babel-loader @babel/cli @babel/core @babel/preset-env --save-dev    //babel命令行工具；babel转义的核心；babel默认转义es6-》es5 ；保存为开发依赖(上线不需要转义)
- npm i react
- npm i stylus --save-dev
- 新建 .babelrc
```json
{
    "presets":["@babel/preset-env"]
}
```
- .\node_modules\.bin\babel 1.js -o es5.js 完成转换并输出

### jsx->js
- npm i @babel/preset-react --save-dev
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
- .\node_modules\.bin\babel hello.jsx -o hello.js

### 在Scripts：中添加build
- 在script下运行的babel就会直接去node_modules下的bin找，不用写前缀了
```JSONnpm i @babel/cli @babel/core @babel/preset-env --save-dev
{
  "scripts": {
     "build": "babel Hello.jsx -o Hello.js"
  }
}
```