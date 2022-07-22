#  高仿哔哩哔哩  
    - 全新的项目
        1. 仿， 大厂的新项目 掘金搜不到
            小特  
        2. react 全家桶(hooks + router + redux) + ts + node 
            大前端 reat 前端 + node 后端 
            全端工程师 reat PC|Mobile + react Native(Native) | Android | IOS  用户体验 

- npm init vite 
    - 创建了  react  + ts  bilibili 移动端单页应用
        用户的浏览器  
    - bilibili-api 后端  
        服务器 
        /url   接口  数据的对接 
        大前端 node 代码只为前端提供数据接口 

- ts 前端 
    1. vite   react-ts 模板来创建  
    2. 强制类型声明 
        @types/react   react 类型声明文件   React.FC<PropTypes>
        - UI Component  组件位置声明  对props  interface 约定 
        - ts  + api   :Promise<MemberEntity[]>
        getMembers:Promise<MemberEntity[]>() {
            const p = new Promise();
            reutrn p 
        }
        - ts  redux 
        - ts vites 配置 
- api 服务  js来写 
- alias 配置在ts 里对tsx 组件不支持
    - 功能没有问题， ts错误提示 
    - tsconfig.json  compilerOptions 
        baseUrl 
        paths 告诉我们ts 添加 预编译的路径 

- @types/node  @types/react  有点像  
    有node 里相关的类型声明可以用， process:Process 进程  
    @types/ 就是ts 类型声明需要的 interface type 

- 全栈 项目中  数据从服务器端 到 页面显示 
    经过哪些地方？ 
    audios 
    1. 后端给我们一个数据接口 /api  某个返回promise 的函数
        url /audios GET  res  JSON 数组
    2. bilibili-api  跟前端的api 对接的 
        怎么满足1？
        - http 服务 协议前提
            https://localhost:3300/audios domain
            baidu.com    dns解析    ip 
    3. /audios  GET  [{}]
        react-router  负责的？
        koa-router     
        - /audios   路径， 前端后端都能设置吗？
           - 前端路由？ 前端可以， audios  路由级别页面  单页应用  
                用户体验  近8年来发明的， react-router 
            - 后端必须可以  backend 
                /path   method 1.1  
        - /videos  react-router  <Route path="/videos", element={<Videos/>}>  <Link to="">  页面级别组件
            htm5 history.pushState(url, ) /  不会更新页面   hashChange  #
        - effect   数据  redux  api  bilibili-api/videos 
        - koa  3300   http 服务
        - /getVideos  get   ctx.body=    JSON 数据
    - 后端传统路由中间件服务的流程
        - 先引入require('koa-router')()  router
        - router 对象 get|post(url, 中间件函数)
            添加一个路由中间件  ctx.body 
        - app.use 挂载一下， 才能生效 

- 中间件 
    1. 位于 req    res  中间的多个服务
    2. 中间件就是一个函数
    3. compose  成为一个数组
    4. 顺序  
    5. 请求响应过程中， 所有的中间件会按顺序给我们提供服务， 
        也可以提前退出中间件服务， 也会出现服务跳过的情况 
     
- 前端api ts 注意哪些？
    1. 要请求的数据， 严格要求， 那么 
        ts  models/ 架构文件夹
        对数据进行建模  interface 表 字段 -》 interface 
    2. 接口函数  
        - 函数的返回值  (resolve, reject):Promise<Video[]> => { }
        Video[]   T
        - new Promise<Video[]> 显示指定未来的结果 unknow => 
            unknow 是ts 的类型 

- 在App.tsx 生命周期中通过 api  
    从 http://localhost:3000   ？  向http://localhost:3300/getvideos
    请求失败？ 原因是什么？
    跨域了， 前端在3000      后端在3300  
    url里   http://www.baidu.com:3000/a?b=1#hhh  301 302  307 
            https://www.baidu.com:3000/a?b=1#hhh 算
            http://www.baidu.com:3300/a?b=1#hhh  算 
            http://www.google.com:3000/a?b=1#hhh 算

    跨域有安全问题， 按这些规则来 
    1. cors 
        后端解决方案
