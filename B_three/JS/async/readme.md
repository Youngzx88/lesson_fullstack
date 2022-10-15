## json主流数据交换格式
1. db.json数据posts comments 来组织
2. 交换json格式一般用于前端和后端交换数据

- json格式的文件
   -  {}对象字面量 json object
- 博客
    - 文章
    - 评论
    - 用户

- 数据存在数据库中，导出来的，也是文件.csv
- 也可以在json文件里json后缀的文件，放的是数据
- mysql 数据表 json key

## `db.json`数据库后端资源来访问
1. 把当前项目改成一个全栈项目`npm init -y` 后端项目的初始化
    - 生成一个`package.json`项目描述文件
2. 安装一些工具包`npm i json-server`
    - json-server 基于json格式的数据文件提供数据访问服务
3. 修改package.json 中 script `"dev": "json-server --watch db.json"`
4. `npm run dev`跑起来

- live-server 启动了 前端网页的访问(http)
    - 前端http://127.0.0.1:5500/js/async/index.html
    - Mysql数据库服务127.0.0.1:3306
    - 后端 数据可以在项目跑起来的时候在终端看到

- 前端 后端 数据通信 json 通信的基本格式
    - xhr
    - 前端主动去拉取后端的数据服务
