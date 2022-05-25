# 第一个综合应用
1. npm有一个可以指定查找的地方：npmjs.org查询package说明书
    - "lodash": "^4.17.4",js功能工具库
    - "lokijs": "^1.5.1",数据库
    - "moment": "^2.19.1",日期库
    - "semantic-ui-css": "^2.2.12"
2. 分析组件化
3. 如何引入第三方css框架
    - vitejs react脚手架中 import from '相对路径./../'  （components）
    - css文件与js文件不一样
        - import React from 'react' (引入一部分)
        - import 'semantic-ui-css/semantic-ui.css' (全部引入-有后缀)
        - 一切静态资源都可以被引入，框架样式，根组件内引入
4. 父子组件传值之报告老板
    - 子组件有事情要发生，要告知父组件
    - 父组件把函数传给子组件，子组件调用父组件的传过来的函数
5. sementic-ui框架
    - 简单类名UI
6. 