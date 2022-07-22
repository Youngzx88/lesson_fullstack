- ts vite 配置
- alias 配置在ts里对tsx组件不支持
  - tsconfig.json compilerOptions
    - baseUrl
    - paths告诉我们ts添加预编译的路径
- @type/node @types/react 有点像 有node里相关类型声明可以用，process:Process进程
- @types/ 就是ts类型声明需要的interface

- 全栈项目中 数据从服务器端到页面显示 会经过哪些地方
  1. 后端给我们一个接口 /api 下某一个返回promise的函数 json数组